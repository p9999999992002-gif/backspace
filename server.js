// server.js na raiz do projeto
import dotenv from 'dotenv';
import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';

// Carrega as variáveis de ambiente do arquivo .env
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middlewares
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:5173',
  credentials: true
}));
app.use(express.json());

// Configuração do Nodemailer com variáveis de ambiente
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS  // Senha de app de 16 dígitos
  },
  tls: {
    rejectUnauthorized: false
  }
});

// Verifica se o email está configurado corretamente ao iniciar
transporter.verify((error, success) => {
  if (error) {
    console.error('❌ Erro na configuração do email:', error);
  } else {
    console.log('✅ Servidor de email pronto para enviar mensagens');
  }
});

// Rota para enviar e-mail
app.post('/api/send-email', async (req, res) => {
  try {
    const { name, email, phone, company, niche, employees, manualProcesses, challenge } = req.body;

    // Validação básica dos campos obrigatórios
    if (!name || !email || !company) {
      return res.status(400).json({ 
        success: false, 
        message: 'Nome, email e empresa são obrigatórios' 
      });
    }

    // Configuração do email a ser enviado
    const mailOptions = {
      from: `"Backspace Forms" <${process.env.EMAIL_USER}>`,
      to: 'contato@backspace.dev.br',
      replyTo: email,
      subject: `🚀 Nova Solicitação de Design - ${company}`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);">
          <div style="background: white; padding: 30px; border-radius: 10px; max-width: 600px; margin: 0 auto;">
            <h1 style="color: #667eea;">📋 Nova Solicitação de Design</h1>
            
            <h2 style="color: #333;">👤 Informações de Contato</h2>
            <p><strong>Nome:</strong> ${name}</p>
            <p><strong>E-mail:</strong> <a href="mailto:${email}">${email}</a></p>
            <p><strong>Telefone:</strong> ${phone || 'Não informado'}</p>

            <h2 style="color: #333;">🏢 Informações da Empresa</h2>
            <p><strong>Empresa:</strong> ${company}</p>
            <p><strong>Nicho:</strong> ${niche || 'Não informado'}</p>
            <p><strong>Funcionários:</strong> ${employees || 'Não informado'}</p>
            <p><strong>Processos Manuais:</strong> ${manualProcesses || 'Não informado'}</p>

            <h2 style="color: #333;">💡 Desafio Técnico</h2>
            <p style="background: #f5f5f5; padding: 15px; border-radius: 5px;">${challenge || 'Não informado'}</p>
            
            <hr style="margin: 20px 0; border: none; border-top: 1px solid #eee;">
            <p style="color: #999; font-size: 12px;">Email enviado automaticamente pelo sistema Backspace</p>
          </div>
        </div>
      `
    };

    // Envia o email
    const info = await transporter.sendMail(mailOptions);
    console.log('✅ Email enviado com sucesso:', info.messageId);
    
    res.status(200).json({ 
      success: true, 
      message: 'E-mail enviado com sucesso!',
      messageId: info.messageId
    });

  } catch (error) {
    console.error('❌ Erro ao enviar email:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Erro ao enviar e-mail. Tente novamente mais tarde.', 
      error: error.message 
    });
  }
});

// Rota de teste da API
app.get('/api/test', (req, res) => {
  res.json({ 
    message: 'API Backspace funcionando!', 
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV || 'development'
  });
});

// Health check
app.get('/health', (req, res) => {
  res.status(200).json({ 
    status: 'OK',
    service: 'Backspace Email API'
  });
});

// Inicia o servidor
app.listen(PORT, () => {
  console.log(`🚀 Servidor Backspace rodando em http://localhost:${PORT}`);
  console.log(`📧 Email configurado: ${process.env.EMAIL_USER}`);
});
