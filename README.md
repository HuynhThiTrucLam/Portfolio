# Portfolio - React + TypeScript + Vite + Bun

A modern portfolio website built with React, TypeScript, Vite, and deployed using Bun for optimal performance.

## 🚀 Quick Start

### Prerequisites

- [Bun](https://bun.sh/) (recommended) or Node.js 18+
- Git

### Development

1. **Clone the repository**

   ```bash
   git clone <your-repo-url>
   cd portfolio
   ```

2. **Install dependencies**

   ```bash
   bun install
   ```

3. **Start development server**

   ```bash
   bun run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

### Building for Production

```bash
# Build the project
bun run build

# Preview the production build
bun run preview
```

### Deployment

This project is configured for deployment with Bun on Vercel:

1. **Automatic deployment**: Push to your main branch and Vercel will automatically deploy using Bun
2. **Manual deployment**: Use the provided deployment script
   ```bash
   ./deploy.sh
   ```

## 🛠️ Tech Stack

- **Frontend**: React 19 + TypeScript
- **Build Tool**: Vite
- **Package Manager**: Bun
- **Styling**: Tailwind CSS + SCSS
- **Deployment**: Vercel
- **UI Components**: Radix UI + Custom components
- **Animations**: Lottie React
- **Icons**: Lucide React

## 📁 Project Structure

```
src/
├── components/     # Reusable UI components
├── pages/         # Page components
├── assets/        # Static assets (images, fonts, SVGs)
├── layouts/       # Layout components
├── services/      # API and external services
├── utils/         # Utility functions
└── routes/        # Routing configuration
```

## 🔧 Configuration Files

- `vercel.json` - Vercel deployment configuration (optimized for Bun)
- `.bunfig.toml` - Bun-specific configuration
- `vite.config.ts` - Vite build configuration
- `tailwind.config.js` - Tailwind CSS configuration

## 🚀 Performance Optimizations

- **Bun**: Faster package installation and builds
- **Vite**: Lightning-fast development server and optimized builds
- **Code Splitting**: Automatic chunk splitting for better loading performance
- **Asset Optimization**: Compressed images and optimized fonts

## 📝 Available Scripts

- `bun run dev` - Start development server
- `bun run build` - Build for production
- `bun run preview` - Preview production build
- `bun run lint` - Run ESLint

## 🌐 Deployment

The project is configured to deploy automatically on Vercel using Bun:

- **Build Command**: `bun run build`
- **Install Command**: `bun install --frozen-lockfile`
- **Output Directory**: `dist`

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test with `bun run build`
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
