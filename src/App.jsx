import { useEffect, useRef, useState } from 'react'

// ─── Particle component for hero ──────────────────────────────
function Particles() {
  const count = 30
  return (
    <div className="hero-particles">
      {Array.from({ length: count }).map((_, i) => (
        <span
          key={i}
          className="particle"
          style={{
            left: `${Math.random() * 100}%`,
            animationDuration: `${8 + Math.random() * 12}s`,
            animationDelay: `${Math.random() * 10}s`,
            width: `${1 + Math.random() * 2}px`,
            height: `${1 + Math.random() * 2}px`,
          }}
        />
      ))}
    </div>
  )
}

// ─── Nav ──────────────────────────────────────────────────────
function Nav() {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  return (
    <nav className={`nav ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-inner">
        <a href="#hero" className="nav-logo">
          <span>{'<'}</span>DMW<span>{' />'}</span>
        </a>
        <ul className="nav-links">
          <li><a href="#about">关于</a></li>
          <li><a href="#projects">项目</a></li>
          <li><a href="#skills">技能</a></li>
          <li><a href="#contact" className="nav-cta">联系我</a></li>
        </ul>
      </div>
    </nav>
  )
}

// ─── Hero ─────────────────────────────────────────────────────
function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero-bg">
        {/* Video background – using a dark abstract tech video */}
        <video
          className="hero-video"
          autoPlay
          muted
          loop
          playsInline
          src="https://assets.mixkit.co/videos/preview/mixkit-digital-animation-of-futuristic-devices-99786-large.mp4"
        />
        <div className="hero-gradient" />
        <div className="hero-grid" />
        <Particles />
      </div>
      <div className="hero-content">
        <div className="hero-eyebrow">C++ 后端开发者</div>
        <h1 className="hero-title">
          你好，我是<br /><strong>段默文</strong>
        </h1>
        <p className="hero-subtitle">
          汕头大学 · 计算机科学与技术<br />
          专注于高性能系统、网络编程与并发架构的 C++ 开发者
        </p>
        <div className="hero-actions">
          <a href="#projects" className="btn-primary">
            查看项目 ↓
          </a>
          <a href="#contact" className="btn-secondary">
            联系我
          </a>
        </div>
      </div>
      <div className="hero-scroll">
        <span>Scroll</span>
        <div className="scroll-line" />
      </div>
    </section>
  )
}

// ─── About ────────────────────────────────────────────────────
function About() {
  return (
    <section className="section about" id="about">
      <div className="container">
        <div className="section-header fade-in">
          <div className="section-label">About Me</div>
          <h2 className="section-title">了解<strong>我</strong></h2>
        </div>
        <div className="about-grid">
          <div className="about-avatar fade-in">
            <div className="avatar-frame">
              {/* Placeholder avatar with initials */}
              <div className="avatar-placeholder">DM</div>
            </div>
            <div className="avatar-accent" />
          </div>
          <div className="about-info fade-in">
            <h3>段默文</h3>
            <span className="role">C++ 开发实习生（后端方向）</span>
            <p className="bio">
              汕头大学计算机科学与技术专业在读，GPA 3.62/4.0。热爱底层系统开发，
              对高并发网络编程、内存管理与性能优化有浓厚兴趣。在 GitHub 维护个人项目与学习笔记，
              坚持用 C++ 复现数据结构与算法，累计刷题超过 1000 道。具备扎实的算法基础与工程化意识，
              能够独立阅读英文技术文档与源码，学习主动性强。
            </p>
            <div className="about-details">
              <div className="detail-item">
                <div className="detail-label">电话</div>
                <div className="detail-value">134 2781 0951</div>
              </div>
              <div className="detail-item">
                <div className="detail-label">邮箱</div>
                <div className="detail-value">25mwduan@stu.edu.cn</div>
              </div>
              <div className="detail-item">
                <div className="detail-label">GitHub</div>
                <div className="detail-value">github.com/chijysmile</div>
              </div>
              <div className="detail-item">
                <div className="detail-label">现居地</div>
                <div className="detail-value">东莞市</div>
              </div>
            </div>
            <div className="about-stats">
              <div className="stat">
                <div className="stat-number">1000+</div>
                <div className="stat-label">算法题</div>
              </div>
              <div className="stat">
                <div className="stat-number">3</div>
                <div className="stat-label">核心项目</div>
              </div>
              <div className="stat">
                <div className="stat-number">3.62</div>
                <div className="stat-label">GPA</div>
              </div>
              <div className="stat">
                <div className="stat-number">2027</div>
                <div className="stat-label">可实习</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── Project Card ─────────────────────────────────────────────
const projectCodeSnippets = [
  `// Memory pool - tcmalloc inspired\nstruct ThreadCache {\n  alignas(64) spinlock lock;\n  freelist slots[128];\n  \n  void* Alloc(size_t size) {\n    auto* slot = slots[size].pop();\n    if (!slot) return CentralFreeList(size);\n    return slot;\n  }\n};`,
  `// Reactor pattern - event loop\nvoid EventLoop::loop() {\n  while (!quit_) {\n    auto events = poller_->poll(-1);\n    for (auto& ev : events) {\n      auto* ch = reinterpret_cast<Channel*>(ev.ptr);\n      ch->handleEvent(ev.revents);\n    }\n    timerQueue_->handleExpired();\n  }\n}`,
  `// Pub/Sub message queue\nvoid Broker::dispatch(const Msg& msg) {\n  auto subs = topics_[msg.topic]\n                .subscribers;\n  for (auto* sub : subs) {\n    sub->queue.push(msg);\n    sub->notify();  // ACK\n  }\n  persist(msg);  // disk\n}`,
]

function ProjectCard({ project, featured = false }) {
  const [hovered, setHovered] = useState(false)
  return (
    <div
      className={`project-card ${featured ? 'featured' : ''} fade-in`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="project-image">
        <div className="project-image-inner">
          <pre className="project-code-preview">
            {project.code.split('\n').map((line, i) => (
              <span key={i} className="code-line">{line}</span>
            ))}
          </pre>
        </div>
        {project.tag && (
          <span className="project-tag">{project.tag}</span>
        )}
      </div>
      <div className="project-body">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-desc">{project.desc}</p>
        <div className="project-tags">
          {project.tags.map(t => (
            <span key={t} className="tag">{t}</span>
          ))}
        </div>
      </div>
    </div>
  )
}

// ─── Projects ─────────────────────────────────────────────────
function Projects() {
  const projects = [
    {
      title: '高并发内存池',
      desc: '参考 tcmalloc 实现线程缓存/中心缓存/页缓存三级结构，thread_local 无锁分配，降低系统调用与内存碎片。多线程吞吐较 glibc malloc 提升显著。',
      tags: ['C++11', 'C++14', 'tcmalloc', '并发'],
      tag: 'Featured',
      code: projectCodeSnippets[0],
      featured: true,
    },
    {
      title: '仿 muduo 高并发网络库',
      desc: '基于 Reactor + epoll ET 实现事件驱动网络库，封装 Channel、Poller、EventLoop、TimerQueue。支持线程池、异步日志，高并发下不阻塞业务。',
      tags: ['epoll', 'Reactor', '线程池', '异步日志'],
      tag: 'Network',
      code: projectCodeSnippets[1],
    },
    {
      title: '发布订阅式消息队列',
      desc: '基于 TCP + Protobuf 实现主题路由、多消费者订阅与消息落盘持久化。生产者-消费者模型 + ACK 机制，保证至少一次投递。',
      tags: ['TCP', 'Protobuf', 'Pub/Sub', '持久化'],
      tag: 'Message',
      code: projectCodeSnippets[2],
    },
  ]
  return (
    <section className="section projects" id="projects">
      <div className="container">
        <div className="section-header fade-in">
          <div className="section-label">Projects</div>
          <h2 className="section-title">核心<strong>项目</strong></h2>
        </div>
        <div className="projects-grid">
          {projects.map((p, i) => (
            <ProjectCard key={i} project={p} featured={p.featured} />
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Skills ───────────────────────────────────────────────────
const skills = [
  { icon: '⚡', name: 'C/C++ 开发', desc: '面向对象、虚函数/虚表、内存管理、STL 底层实现，熟悉 C++11/14 智能指针、移动语义、lambda' },
  { icon: '🔧', name: 'Linux 系统编程', desc: '进程/线程、同步互斥、Socket、epoll 多路复用；熟练使用 gdb、vim、CMake、Git' },
  { icon: '🧠', name: '数据结构与算法', desc: '链表、栈/队列、二叉树、堆、排序、二分、回溯、动态规划，可独立完成中等难度算法题' },
  { icon: '🗄️', name: 'MySQL / Redis', desc: '了解索引原理、事务隔离级别、锁机制；熟悉 Redis 基础数据结构与持久化方案' },
  { icon: '🐳', name: 'Docker / Protobuf', desc: '了解 Docker 容器化部署与 Protobuf 序列化在 RPC 通信中的应用' },
  { icon: '🚀', name: '性能优化', desc: '有内存池、Reactor 模式、线程池、生产者-消费者等高性能架构实践经验' },
  { icon: '📚', name: '算法刷题', desc: '在 GitHub 维护个人项目与学习笔记，累计刷题超过 1000 道（力扣/牛客）' },
  { icon: '🌐', name: '英语能力', desc: '能够流畅阅读英文技术文档与源码，具备良好的沟通与自驱能力' },
]

function Skills() {
  return (
    <section className="section skills" id="skills">
      <div className="container">
        <div className="section-header fade-in">
          <div className="section-label">Skills</div>
          <h2 className="section-title">我的<strong>优势</strong></h2>
        </div>
        <div className="skills-grid">
          {skills.map((s, i) => (
            <div key={i} className="skill-card fade-in">
              <div className="skill-icon">{s.icon}</div>
              <div className="skill-name">{s.name}</div>
              <div className="skill-desc">{s.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Contact ──────────────────────────────────────────────────
function Contact() {
  return (
    <section className="section contact" id="contact">
      <div className="contact-glow" />
      <div className="container">
        <div className="contact-content fade-in">
          <div className="contact-label">Get in Touch</div>
          <h2 className="contact-title">
            期待与你<br /><strong>交流合作</strong>
          </h2>
          <p className="contact-subtitle">
            无论是实习机会、技术探讨还是项目合作，欢迎随时联系我。<br />
            我会在 24 小时内回复。
          </p>
          <div className="contact-links">
            <a href="tel:13427810951" className="contact-link">
              📱 134 2781 0951
            </a>
            <a href="mailto:25mwduan@stu.edu.cn" className="contact-link">
              ✉️ 25mwduan@stu.edu.cn
            </a>
            <a href="https://github.com/chijysmile" target="_blank" rel="noreferrer" className="contact-link">
              ⭐ github.com/chijysmile
            </a>
          </div>
          <div className="contact-footer">
            <span>© 2026 段默文 · 汕头大学</span>
            <div className="footer-links">
              <a href="https://github.com/chijysmile" target="_blank" rel="noreferrer">GitHub</a>
              <a href="mailto:25mwduan@stu.edu.cn">Email</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── Main App ─────────────────────────────────────────────────
function App() {
  const observerRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    )
    observerRef.current = observer
    document.querySelectorAll('.fade-in').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <Nav />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </>
  )
}

export default App
