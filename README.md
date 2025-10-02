<div align="center">
  
# 💧 Jal Shakti: Groundwater Quality Calculator

[![Next.js](https://img.shields.io/badge/Next.js-black?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![PWA](https://img.shields.io/badge/PWA-Enabled-5A0FC8?style=for-the-badge&logo=pwa&logoColor=white)](https://web.dev/progressive-web-apps/)
[![Firebase](https://img.shields.io/badge/Firebase-039BE5?style=for-the-badge&logo=Firebase&logoColor=white)](https://firebase.google.com/)
[![Google Cloud](https://img.shields.io/badge/GoogleCloud-%234285F4.svg?style=for-the-badge&logo=google-cloud&logoColor=white)](https://cloud.google.com/)
[![AI Powered](https://img.shields.io/badge/AI-Powered-brightgreen?style=for-the-badge&logo=artificial-intelligence&logoColor=white)](#)

</div>

<div align="center">
  <img width="400" height="400" alt="Jal Shakti App Icon" src="https://github.com/user-attachments/assets/3b09843c-e445-4193-9d1e-9433173864b1" />
</div>

<div align="center">
  
**🌊 A cutting-edge web application for calculating Heavy Metal Pollution Index (HMPI) in groundwater quality assessment**

*Empowering environmental professionals, researchers, and students with intelligent automation tools*

</div>

---
## ✨ Key Features

### 🔧 **Data Input & Processing**
- **📝 Manual Input**: Direct entry of heavy metal concentration values
- **📊 Automated Upload**: AI-powered analysis of lab report images
- **🤖 OCR Technology**: Genkit AI flow automatically extracts data from reports

### 🌍 **Location & Analysis**
- **📍 Geolocation**: Automatic GPS coordinate capture for sample location tagging
- **⚡ HMPI Calculation**: Instant Heavy Metal Pollution Index computation
- **🎯 Quality Assessment**: Water quality categorization (Low, Medium, High, Very High)

### 📈 **Visualization & Reporting**
- **📊 Interactive Charts**: HMPI trend visualization over time
- **📋 Report Generation**: Export assessments in PDF and CSV formats
- **📚 History Tracking**: Comprehensive past assessment records
- **🗺️ Pollution Mapping**: Visual contamination hotspot identification

### ⚙️ **Customization**
- **🔢 Unit Configuration**: Flexible measurement unit settings
- **🌓 Theme Toggle**: Light and dark mode support
- **👤 User Management**: Secure authentication system

### 📱 **Progressive Web App (PWA) Features**
- **🚀 Native-like Experience**: Install directly from browser without app stores
- **📵 Offline Functionality**: Work seamlessly without internet connectivity
- **💾 Minimal Storage**: ~2MB installation vs traditional 50MB+ native apps
- **⚡ Lightning Fast**: Instant loading with service worker caching
- **🔄 Auto Updates**: Background updates without user intervention
- **📱 Cross-Platform**: Single codebase works on iOS, Android, and Desktop
- **🔋 Battery Efficient**: Optimized performance for low-end devices
- **📶 Low Data Usage**: Progressive loading and smart caching strategies

## 🏗️ Technical Architecture

### 🛠️ **Technology Stack**

<div align="center">

| Technology | Purpose | Icon |
|------------|---------|------|
| **🔥 Firebase Hosting** | Fast, secure web hosting | ![Firebase](https://img.shields.io/badge/Firebase-039BE5?style=flat-square&logo=Firebase&logoColor=white) |
| **⚡ Google Cloud Functions** | Serverless computation | ![Google Cloud](https://img.shields.io/badge/GCloud-4285F4?style=flat-square&logo=google-cloud&logoColor=white) |
| **🗄️ Google Cloud SQL** | PostgreSQL with PostGIS | ![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=flat-square&logo=postgresql&logoColor=white) |
| **🔐 Firebase Authentication** | Secure user management | ![Auth](https://img.shields.io/badge/Auth-FF6B35?style=flat-square&logo=firebase&logoColor=white) |
| **🗺️ Leaflet.js / Mapbox** | Interactive mapping | ![Maps](https://img.shields.io/badge/Maps-00D4AA?style=flat-square&logo=mapbox&logoColor=white) |
| **📱 PWA Technologies** | Native-like mobile experience | ![PWA](https://img.shields.io/badge/PWA-5A0FC8?style=flat-square&logo=pwa&logoColor=white) |
| **🔄 Service Workers** | Offline functionality & caching | ![SW](https://img.shields.io/badge/ServiceWorker-FF6B35?style=flat-square&logo=javascript&logoColor=white) |

</div>

### 🔄 **Implementation Workflow**

<div align="center">
  <img width="100%" alt="System Architecture Diagram" src="https://github.com/user-attachments/assets/0f504f95-355c-4d97-b9db-c509d23241a6" />
</div>

<div align="center">

```mermaid
graph LR
    A[👤 User] --> B[🌐 Web App]
    B --> C[🔐 Authentication]
    C --> D[☁️ Cloud Function]
    D --> E[🐍 Python HMPI]
    E --> F[🗄️ Database]
    F --> G[📊 Visualization]
```

</div>

#### 📋 **Process Flow**

1. **🚀 User Interaction**: Access web application via Firebase Hosting
2. **🔑 Authentication**: Secure login/signup with Firebase Auth
3. **📡 API Request**: Frontend sends data to Cloud Function endpoint
4. **⚙️ Core Calculation**: Python-based HMPI computation in the cloud
5. **💾 Database Operations**: Store results and retrieve historical data
6. **📈 Response & Visualization**: Display results with interactive maps

---

## 📱 Progressive Web App Excellence

<div align="center">

### 🌟 **Why PWA? Native Mobile Experience Without the Hassle**

</div>

<table align="center">
<tr>
<th>📱 Traditional Native Apps</th>
<th>🌐 Our PWA Solution</th>
</tr>
<tr>
<td>

❌ **50MB+ Download Size**<br/>
❌ **App Store Approval Delays**<br/>
❌ **Platform-specific Development**<br/>
❌ **Requires High-end Devices**<br/>
❌ **Manual Update Process**<br/>

</td>
<td>

✅ **~2MB Lightweight Installation**<br/>
✅ **Instant Access via Browser**<br/>
✅ **Single Codebase for All Platforms**<br/>
✅ **Optimized for Low-end Devices**<br/>
✅ **Automatic Background Updates**<br/>

</td>
</tr>
</table>

### 🔧 **Technical PWA Implementation**

<div align="center">

| Feature | Implementation | Benefit |
|---------|---------------|---------|
| **📦 Service Worker** | Custom caching strategies | Offline functionality + faster loading |
| **📱 Web App Manifest** | Native installation prompts | Home screen installation |
| **💾 IndexedDB Storage** | Local data persistence | Work without internet |
| **🔄 Background Sync** | Queue actions when offline | Seamless data synchronization |
| **📲 Push Notifications** | Real-time pollution alerts | Immediate hazard warnings |
| **⚡ Lazy Loading** | Progressive resource loading | Optimal performance on 2G networks |

</div>

### 🌍 **Universal Device Compatibility**
- **💻 Laptops**: Full-featured desktop experience with all capabilities
- **📱 Mobile Phones**: Optimized touch interface for field data collection
- **📟 Tablets**: Perfect balance of screen size and portability for research
- **⌚ Smart Watches**: Basic data viewing and quick pollution alerts
- **🖥️ Desktop Computers**: Complete analysis and report generation
- **📺 Smart TVs**: Data visualization for presentations and monitoring
- **🏞️ Remote Locations**: Functions in areas with poor connectivity
- **🔋 Battery Optimization**: Minimal power consumption for extended fieldwork  
- ** Cost Effective**: No need for expensive hardware upgrades
- **🌐 Universal Access**: Works on **ANY device with a modern browser**

---

## 🚀 Getting Started

### 📋 **Prerequisites**
- 📦 Node.js (v18 or higher)
- 🧶 npm or yarn package manager
- 🔥 Firebase CLI (optional, for deployment)

### ⚡ **Quick Setup**

#### 1️⃣ **Install Dependencies**
```bash
# 📥 Install all required packages
npm install
```

#### 2️⃣ **Start Development Server**
```bash
# 🏃‍♂️ Run the Next.js development server
npm run dev
```
🌐 **Access the application at:** [http://localhost:9002](http://localhost:9002)

#### 3️⃣ **AI Flows Setup** *(Optional)*
```bash
# 🤖 Start Genkit AI development server
npm run genkit:dev
```
🔧 **Genkit UI available at:** [http://localhost:4000](http://localhost:4000)

### 🔧 **Available Scripts**

| Command | Description | Icon |
|---------|-------------|------|
| `npm run dev` | Start development server | 🏃‍♂️ |
| `npm run build` | Build for production | 🏗️ |
| `npm run start` | Start production server | 🚀 |
| `npm run genkit:dev` | Start AI flows UI | 🤖 |
| `npm run lint` | Code linting | 🔍 |

## 📁 Project Structure

```
📦 Jal-Shakti-App/
├── 🌐 src/app/              # Next.js App Router pages
│   ├── 🏠 page.tsx          # Home dashboard
│   ├── 📊 report/           # Report generation
│   ├── 📈 results/          # HMPI results display
│   ├── 📚 history/          # Past assessments
│   └── ⚙️ settings/         # User preferences
├── 🧩 src/components/       # Reusable React components
│   ├── 📊 dashboard/        # Main dashboard components
│   ├── 🗺️ maps/            # Mapping components
│   ├── 📋 forms/            # Input forms
│   └── 🎨 ui/              # UI primitives
├── 🤖 src/ai/flows/         # Genkit AI workflows
│   ├── 📖 extract-hmpi-from-report.ts
│   ├── 🗺️ generate-pollution-map.ts
│   └── 💡 suggest-remediation.ts
├── 🛠️ src/lib/             # Utilities & helpers
├── 🎯 public/              # Static assets
└── 📄 docs/                # Documentation
```

### 🎯 **Core Directories**

| Directory | Purpose | Key Files |
|-----------|---------|-----------|
| **📱 `src/app/`** | Application pages | Layout, routing, page components |
| **🧩 `src/components/`** | UI components | Dashboard, forms, charts, maps |
| **🤖 `src/ai/`** | AI workflows | OCR, data extraction, recommendations |
| **🛠️ `src/lib/`** | Utilities | Data processing, API helpers |

---

## 📱 Application Screenshots

<div align="center">
  
### 🏠 **Dashboard Views**

<table>
  <tr>
    <td align="center">
      <img src="https://github.com/user-attachments/assets/6f5a1299-34f9-4481-951c-234495dce50d" alt="Home Dashboard" width="200"/>
      <br/>
      <strong>🏠 Home Dashboard</strong>
    </td>
    <td align="center">
      <img src="https://github.com/user-attachments/assets/eb776efd-4a95-4662-a34e-cac6cb60f4a6" alt="Data Input" width="200"/>
      <br/>
      <strong>📊 Data Input</strong>
    </td>
    <td align="center">
      <img src="https://github.com/user-attachments/assets/33f88e99-25f6-40b4-b0ed-7aea8fb413a7" alt="Results Screen" width="200"/>
      <br/>
      <strong>📈 Results Analysis</strong>
    </td>
  </tr>
  <tr>
    <td align="center">
      <img src="https://github.com/user-attachments/assets/0766b58d-5322-43a2-8719-9529ab170577" alt="Report Generation" width="200"/>
      <br/>
      <strong>📋 Report Generation</strong>
    </td>
    <td align="center">
      <img src="https://github.com/user-attachments/assets/5eca85b6-f707-4ab3-9597-c1382d784554" alt="Alert Screen" width="200"/>
      <br/>
      <strong>🚨 Pollution Alerts</strong>
    </td>
    <td align="center">
      <img src="https://github.com/user-attachments/assets/2488025c-6946-4671-a4c1-6a4a0ed15d8f" alt="History Screen" width="200"/>
      <br/>
      <strong>📚 Historical Data</strong>
    </td>
  </tr>
</table>

</div>

---

<div align="center">

### 🌟 **Star this repository if you find it helpful!**

[![GitHub stars](https://img.shields.io/github/stars/shaikhakramshakil/Jal-Shakti-App?style=social)](https://github.com/shaikhakramshakil/Jal-Shakti-App/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/shaikhakramshakil/Jal-Shakti-App?style=social)](https://github.com/shaikhakramshakil/Jal-Shakti-App/network)

**Made with 💙 for clean water initiatives**

</div>
