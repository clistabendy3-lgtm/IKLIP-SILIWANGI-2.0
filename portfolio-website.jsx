import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function PortfolioWebsite() {
  const [currentPage, setCurrentPage] = useState('home');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const menuItems = {
    home: { label: 'Home' },
    profil: { label: 'Profil', parent: 'Tentang Kami' },
    visiMisi: { label: 'Visi, Misi & Tujuan', parent: 'Tentang Kami' },
    sejarah: { label: 'Sejarah', parent: 'Tentang Kami'},
    legalitas: { label: 'Legalitas Formal', parent: 'Tentang Kami' },
    akreditasi: { label: 'Akreditasi', parent: 'Tentang Kami', icon: '✓' },
    struktur: { label: 'Struktur Organisasi', parent: 'Tentang Kami' }
  };

  const aboutSubMenu = [
    { id: 'profil', label: 'Profil' },
    { id: 'visiMisi', label: 'Visi, Misi & Tujuan' },
    { id: 'sejarah', label: 'Sejarah' },
    { id: 'legalitas', label: 'Legalitas Formal' },
    { id: 'akreditasi', label: 'Akreditasi' },
    { id: 'struktur', label: 'Struktur Organisasi' }
  ];

  const fakultasSubMenu = [
    { id: 'fak-teknik', label: 'Fakultas Teknik' },
    { id: 'fak-bisnis', label: 'Fakultas Bisnis' },
    { id: 'fak-hukum', label: 'Fakultas Hukum' },
    { id: 'fak-kesehatan', label: 'Fakultas Kesehatan' }
  ];

  const programStudiSubMenu = [
    { id: 'ps-si', label: 'Sistem Informasi' },
    { id: 'ps-ti', label: 'Teknik Informatika' },
    { id: 'ps-akun', label: 'Akuntansi' },
    { id: 'ps-mnj', label: 'Manajemen' },
    { id: 'ps-hk', label: 'Hukum Bisnis' }
  ];

  const renderContent = () => {
    const contentMap = {
      home: (
        <div className="content-section">
          <h1>Selamat Datang di Portofolio Kami</h1>
          <p>Kami adalah organisasi yang berdedikasi untuk memberikan layanan terbaik dengan integritas dan inovasi. Jelajahi website kami untuk mengetahui lebih lanjut tentang visi, misi, dan pencapaian kami.</p>
          <div className="highlight-box">
            <h3>Highlight Utama</h3>
            <ul>
              <li>Tim profesional berpengalaman lebih dari 10 tahun</li>
              <li>Terakreditasi dan tersertifikasi internasional</li>
              <li>Komitmen terhadap keunggulan dan inovasi</li>
              <li>Jaringan nasional dan regional yang kuat</li>
            </ul>
          </div>
        </div>
      ),
      berita: (
        <div className="content-section">
          <h1>Berita & Pengumuman</h1>
          <div className="news-container">
            <div className="news-card">
              <div className="news-date">12 Juni 2024</div>
              <h3>Penghargaan Excellence Award 2024</h3>
              <p>Organisasi kami meraih penghargaan Excellence Award dalam kategori Inovasi dan Layanan Pelanggan. Penghargaan ini merupakan hasil kerja keras dan dedikasi seluruh tim kami.</p>
              <a href="#" className="read-more">Baca Selengkapnya →</a>
            </div>
            <div className="news-card">
              <div className="news-date">08 Juni 2024</div>
              <h3>Peluncuran Program Pelatihan Digital</h3>
              <p>Kami dengan bangga meluncurkan program pelatihan digital gratis untuk 500 peserta dari komunitas lokal. Program ini dirancang untuk meningkatkan skill digital di era modern.</p>
              <a href="#" className="read-more">Baca Selengkapnya →</a>
            </div>
            <div className="news-card">
              <div className="news-date">01 Juni 2024</div>
              <h3>Kemitraan Strategis dengan Universitas Terkemuka</h3>
              <p>Organisasi kami telah menandatangani MoU dengan 5 universitas terkemuka untuk kolaborasi riset dan pengembangan akademik. Kerjasama ini diharapkan membawa inovasi baru.</p>
              <a href="#" className="read-more">Baca Selengkapnya →</a>
            </div>
            <div className="news-card">
              <div className="news-date">25 Mei 2024</div>
              <h3>Ekspansi Kantor Cabang Baru di Yogyakarta</h3>
              <p>Kantor cabang terbaru kami di Yogyakarta telah resmi dibuka dan melayani komunitas lokal. Dengan lokasi strategis, kami siap memberikan layanan terbaik kepada masyarakat.</p>
              <a href="#" className="read-more">Baca Selengkapnya →</a>
            </div>
          </div>
        </div>
      ),
      'fak-teknik': (
        <div className="content-section">
          <h1>Fakultas Teknik</h1>
          <p>Fakultas Teknik adalah pusat pengembangan inovasi dan teknologi terkini dengan fokus pada pendidikan berkualitas tinggi dan penelitian yang kontribusif.</p>
          
          <div className="faculty-info">
            <div className="info-card">
              <h3>Dekan</h3>
              <p>Prof. Dr. Ahmad Wijaya, M.Eng.</p>
            </div>
            <div className="info-card">
              <h3>Mahasiswa</h3>
              <p>2,500+ mahasiswa aktif</p>
            </div>
            <div className="info-card">
              <h3>Dosen</h3>
              <p>150+ dosen bersertifikat</p>
            </div>
            <div className="info-card">
              <h3>Program Studi</h3>
              <p>7 program studi terakreditasi</p>
            </div>
          </div>

          <h2>Program Studi:</h2>
          <ul>
            <li>Teknik Informatika</li>
            <li>Sistem Informasi</li>
            <li>Teknik Elektro</li>
            <li>Teknik Mesin</li>
            <li>Teknik Sipil</li>
            <li>Teknik Industri</li>
            <li>Teknik Pertanian</li>
          </ul>

          <h2>Fasilitas:</h2>
          <div className="facility-grid">
            <div className="facility-card">
              <h3>Laboratorium Komputer</h3>
              <p>Dilengkapi dengan 200+ workstation dan server terkini</p>
            </div>
            <div className="facility-card">
              <h3>Workshop & Manufaktur</h3>
              <p>Peralatan modern untuk praktik dan riset</p>
            </div>
            <div className="facility-card">
              <h3>Pusat Data Center</h3>
              <p>Infrastruktur IT dengan standar internasional</p>
            </div>
            <div className="facility-card">
              <h3>Ruang Inovasi</h3>
              <p>Inkubator untuk startup dan pengembangan ide</p>
            </div>
          </div>
        </div>
      ),
      'fak-bisnis': (
        <div className="content-section">
          <h1>Fakultas Bisnis</h1>
          <p>Fakultas Bisnis berkomitmen untuk menghasilkan lulusan yang profesional, etis, dan kompetitif dalam dunia bisnis global.</p>
          
          <div className="faculty-info">
            <div className="info-card">
              <h3>Dekan</h3>
              <p>Dr. Rina Setiawati, MBA</p>
            </div>
            <div className="info-card">
              <h3>Mahasiswa</h3>
              <p>1,800+ mahasiswa aktif</p>
            </div>
            <div className="info-card">
              <h3>Dosen</h3>
              <p>120+ dosen bersertifikat</p>
            </div>
            <div className="info-card">
              <h3>Program Studi</h3>
              <p>5 program studi terakreditasi</p>
            </div>
          </div>

          <h2>Program Studi:</h2>
          <ul>
            <li>Manajemen</li>
            <li>Akuntansi</li>
            <li>Ekonomi Pembangunan</li>
            <li>Keuangan & Perbankan</li>
            <li>Manajemen Sumber Daya Manusia</li>
          </ul>

          <h2>Program Khusus:</h2>
          <div className="facility-grid">
            <div className="facility-card">
              <h3>MBA Program</h3>
              <p>Program Master dengan standar internasional</p>
            </div>
            <div className="facility-card">
              <h3>Sertifikasi Profesional</h3>
              <p>Partnership dengan badan sertifikasi global</p>
            </div>
            <div className="facility-card">
              <h3>Kelas Korporat</h3>
              <p>Pelatihan khusus untuk karyawan perusahaan</p>
            </div>
            <div className="facility-card">
              <h3>Konsultasi Bisnis</h3>
              <p>Layanan konsultasi untuk UKM dan korporat</p>
            </div>
          </div>
        </div>
      ),
      'fak-hukum': (
        <div className="content-section">
          <h1>Fakultas Hukum</h1>
          <p>Fakultas Hukum mengembangkan profesional hukum yang berintegritas, berwawasan, dan mampu memberikan kontribusi pada pembangunan hukum nasional.</p>
          
          <div className="faculty-info">
            <div className="info-card">
              <h3>Dekan</h3>
              <p>Prof. Dr. Bambang Sutrisno, S.H., LL.M.</p>
            </div>
            <div className="info-card">
              <h3>Mahasiswa</h3>
              <p>1,200+ mahasiswa aktif</p>
            </div>
            <div className="info-card">
              <h3>Dosen</h3>
              <p>100+ dosen berpengalaman</p>
            </div>
            <div className="info-card">
              <h3>Program Studi</h3>
              <p>3 program studi terakreditasi</p>
            </div>
          </div>

          <h2>Program Studi:</h2>
          <ul>
            <li>Ilmu Hukum (S1)</li>
            <li>Magister Hukum (S2)</li>
            <li>Doktor Ilmu Hukum (S3)</li>
          </ul>

          <h2>Pusat Layanan Hukum:</h2>
          <div className="facility-grid">
            <div className="facility-card">
              <h3>Klinik Hukum</h3>
              <p>Memberikan bantuan hukum gratis untuk masyarakat</p>
            </div>
            <div className="facility-card">
              <h3>Perpustakaan Hukum</h3>
              <p>Koleksi buku dan jurnal hukum terlengkap</p>
            </div>
            <div className="facility-card">
              <h3>Pusat Riset Hukum</h3>
              <p>Penelitian untuk pengembangan ilmu hukum</p>
            </div>
            <div className="facility-card">
              <h3>Arbitrase & Mediasi</h3>
              <p>Pusat penyelesaian sengketa alternatif</p>
            </div>
          </div>
        </div>
      ),
      'fak-kesehatan': (
        <div className="content-section">
          <h1>Fakultas Kesehatan</h1>
          <p>Fakultas Kesehatan mendidik profesional kesehatan yang kompeten dan berakhlak untuk meningkatkan derajat kesehatan masyarakat.</p>
          
          <div className="faculty-info">
            <div className="info-card">
              <h3>Dekan</h3>
              <p>Dr. Siti Nurhaliza, M.Kes.</p>
            </div>
            <div className="info-card">
              <h3>Mahasiswa</h3>
              <p>1,600+ mahasiswa aktif</p>
            </div>
            <div className="info-card">
              <h3>Dosen</h3>
              <p>130+ dosen profesional</p>
            </div>
            <div className="info-card">
              <h3>Program Studi</h3>
              <p>6 program studi terakreditasi</p>
            </div>
          </div>

          <h2>Program Studi:</h2>
          <ul>
            <li>Keperawatan</li>
            <li>Kesehatan Masyarakat</li>
            <li>Gizi</li>
            <li>Farmasi</li>
            <li>Fisioterapi</li>
            <li>Kesehatan Lingkungan</li>
          </ul>

          <h2>Fasilitas Klinis:</h2>
          <div className="facility-grid">
            <div className="facility-card">
              <h3>Rumah Sakit Pendidikan</h3>
              <p>200 tempat tidur dengan peralatan modern</p>
            </div>
            <div className="facility-card">
              <h3>Laboratorium Klinis</h3>
              <p>Laboratorium terakreditasi ISO untuk pembelajaran</p>
            </div>
            <div className="facility-card">
              <h3>Klinik Komunitas</h3>
              <p>Layanan kesehatan untuk masyarakat umum</p>
            </div>
            <div className="facility-card">
              <h3>Pusat Simulasi Medis</h3>
              <p>Simulator dan manikin untuk praktik klinis</p>
            </div>
          </div>
        </div>
      ),
      'ps-si': (
        <div className="content-section">
          <h1>Program Studi Sistem Informasi</h1>
          <div className="program-detail">
            <div className="detail-box">
              <h3>Gelar yang Diberikan</h3>
              <p>S1 Sarjana Sistem Informasi (S.Si.)</p>
            </div>
            <div className="detail-box">
              <h3>Durasi Studi</h3>
              <p>4 Tahun (8 Semester)</p>
            </div>
            <div className="detail-box">
              <h3>Akreditasi</h3>
              <p>LAMDIK (A) - Unggul</p>
            </div>
            <div className="detail-box">
              <h3>Kapasitas</h3>
              <p>300 mahasiswa per tahun</p>
            </div>
          </div>

          <h2>Visi & Misi</h2>
          <p><strong>Visi:</strong> Menjadi program studi terdepan dalam pendidikan sistem informasi yang menghasilkan lulusan berkompeten dan inovatif.</p>
          <p><strong>Misi:</strong> Menyelenggarakan pendidikan berkualitas, penelitian, dan pengabdian masyarakat di bidang sistem informasi.</p>

          <h2>Kurikulum Unggulan</h2>
          <ul>
            <li>Analisis Sistem Informasi</li>
            <li>Database Management</li>
            <li>Business Intelligence</li>
            <li>Enterprise Resource Planning (ERP)</li>
            <li>Cybersecurity</li>
            <li>Cloud Computing</li>
            <li>Mobile App Development</li>
          </ul>

          <h2>Prospek Karir</h2>
          <div className="career-grid">
            <div className="career-card">Business Analyst</div>
            <div className="career-card">IT Project Manager</div>
            <div className="career-card">Database Administrator</div>
            <div className="career-card">Systems Analyst</div>
            <div className="career-card">IT Consultant</div>
            <div className="career-card">Solutions Architect</div>
          </div>
        </div>
      ),
      'ps-ti': (
        <div className="content-section">
          <h1>Program Studi Teknik Informatika</h1>
          <div className="program-detail">
            <div className="detail-box">
              <h3>Gelar yang Diberikan</h3>
              <p>S1 Sarjana Teknik Informatika (S.T.)</p>
            </div>
            <div className="detail-box">
              <h3>Durasi Studi</h3>
              <p>4 Tahun (8 Semester)</p>
            </div>
            <div className="detail-box">
              <h3>Akreditasi</h3>
              <p>LAMDIK (A) - Unggul</p>
            </div>
            <div className="detail-box">
              <h3>Kapasitas</h3>
              <p>250 mahasiswa per tahun</p>
            </div>
          </div>

          <h2>Visi & Misi</h2>
          <p><strong>Visi:</strong> Menghasilkan lulusan teknik informatika yang ahli, inovatif, dan siap menjawab tantangan industri digital.</p>
          <p><strong>Misi:</strong> Memberikan pendidikan berkualitas tinggi dalam pengembangan perangkat lunak dan infrastruktur IT.</p>

          <h2>Keahlian Utama</h2>
          <ul>
            <li>Software Development</li>
            <li>Web Application Development</li>
            <li>Artificial Intelligence & Machine Learning</li>
            <li>Computer Networks</li>
            <li>Game Development</li>
            <li>Embedded Systems</li>
            <li>Cybersecurity</li>
          </ul>

          <h2>Prospek Karir</h2>
          <div className="career-grid">
            <div className="career-card">Software Developer</div>
            <div className="career-card">Full Stack Developer</div>
            <div className="career-card">Mobile Developer</div>
            <div className="career-card">AI Engineer</div>
            <div className="career-card">DevOps Engineer</div>
            <div className="career-card">Game Developer</div>
          </div>
        </div>
      ),
      'ps-akun': (
        <div className="content-section">
          <h1>Program Studi Akuntansi</h1>
          <div className="program-detail">
            <div className="detail-box">
              <h3>Gelar yang Diberikan</h3>
              <p>S1 Sarjana Akuntansi (S.Ak.)</p>
            </div>
            <div className="detail-box">
              <h3>Durasi Studi</h3>
              <p>4 Tahun (8 Semester)</p>
            </div>
            <div className="detail-box">
              <h3>Akreditasi</h3>
              <p>LAMDIK (A) - Unggul</p>
            </div>
            <div className="detail-box">
              <h3>Kapasitas</h3>
              <p>200 mahasiswa per tahun</p>
            </div>
          </div>

          <h2>Visi & Misi</h2>
          <p><strong>Visi:</strong> Menjadi pusat pendidikan akuntansi yang menghasilkan profesional akuntansi bersertifikat dan berintegritas.</p>
          <p><strong>Misi:</strong> Menyelenggarakan pendidikan akuntansi yang relevan dengan kebutuhan industri dan praktek terkini.</p>

          <h2>Kompetensi Lulusan</h2>
          <ul>
            <li>Akuntansi Keuangan</li>
            <li>Akuntansi Manajemen</li>
            <li>Audit & Assurance</li>
            <li>Pajak</li>
            <li>Akuntansi Biaya</li>
            <li>Sistem Informasi Akuntansi</li>
          </ul>

          <h2>Prospek Karir</h2>
          <div className="career-grid">
            <div className="career-card">Akuntan Publik (CA)</div>
            <div className="career-card">Financial Analyst</div>
            <div className="career-card">Internal Auditor</div>
            <div className="career-card">Tax Specialist</div>
            <div className="career-card">Accounting Manager</div>
            <div className="career-card">Financial Controller</div>
          </div>
        </div>
      ),
      'ps-mnj': (
        <div className="content-section">
          <h1>Program Studi Manajemen</h1>
          <div className="program-detail">
            <div className="detail-box">
              <h3>Gelar yang Diberikan</h3>
              <p>S1 Sarjana Manajemen (S.M.)</p>
            </div>
            <div className="detail-box">
              <h3>Durasi Studi</h3>
              <p>4 Tahun (8 Semester)</p>
            </div>
            <div className="detail-box">
              <h3>Akreditasi</h3>
              <p>LAMDIK (A) - Unggul</p>
            </div>
            <div className="detail-box">
              <h3>Kapasitas</h3>
              <p>280 mahasiswa per tahun</p>
            </div>
          </div>

          <h2>Visi & Misi</h2>
          <p><strong>Visi:</strong> Menghasilkan pemimpin bisnis yang visioner, etis, dan mampu mengelola organisasi di era digital.</p>
          <p><strong>Misi:</strong> Memberikan pendidikan manajemen berkualitas yang berorientasi pada praktik bisnis terkini.</p>

          <h2>Spesialisasi</h2>
          <ul>
            <li>Manajemen Pemasaran</li>
            <li>Manajemen Operasional</li>
            <li>Manajemen Sumber Daya Manusia</li>
            <li>Manajemen Keuangan</li>
            <li>Manajemen Strategi</li>
            <li>Entrepreneurship</li>
          </ul>

          <h2>Prospek Karir</h2>
          <div className="career-grid">
            <div className="career-card">General Manager</div>
            <div className="career-card">Marketing Manager</div>
            <div className="career-card">HR Manager</div>
            <div className="career-card">Operations Manager</div>
            <div className="career-card">Entrepreneur</div>
            <div className="career-card">Business Consultant</div>
          </div>
        </div>
      ),
      'ps-hk': (
        <div className="content-section">
          <h1>Program Studi Hukum Bisnis</h1>
          <div className="program-detail">
            <div className="detail-box">
              <h3>Gelar yang Diberikan</h3>
              <p>S1 Sarjana Hukum (S.H.)</p>
            </div>
            <div className="detail-box">
              <h3>Durasi Studi</h3>
              <p>4 Tahun (8 Semester)</p>
            </div>
            <div className="detail-box">
              <h3>Akreditasi</h3>
              <p>LAMDIK (B) - Baik</p>
            </div>
            <div className="detail-box">
              <h3>Kapasitas</h3>
              <p>180 mahasiswa per tahun</p>
            </div>
          </div>

          <h2>Visi & Misi</h2>
          <p><strong>Visi:</strong> Menjadi program studi hukum bisnis yang terkemuka dalam menghasilkan profesional hukum bisnis yang kompeten.</p>
          <p><strong>Misi:</strong> Menyelenggarakan pendidikan hukum bisnis yang komprehensif dan relevan dengan praktik bisnis kontemporer.</p>

          <h2>Keahlian Utama</h2>
          <ul>
            <li>Hukum Perdata Komersial</li>
            <li>Hukum Perusahaan</li>
            <li>Hukum Perdagangan Internasional</li>
            <li>Hukum Investasi</li>
            <li>Hukum Perpajakan Bisnis</li>
            <li>Penyelesaian Sengketa Bisnis</li>
          </ul>

          <h2>Prospek Karir</h2>
          <div className="career-grid">
            <div className="career-card">Legal Counsel</div>
            <div className="career-card">Lawyer Bisnis</div>
            <div className="career-card">Compliance Officer</div>
            <div className="career-card">Legal Advisor</div>
            <div className="career-card">Mediator Bisnis</div>
            <div className="career-card">Legal Consultant</div>
          </div>
        </div>
      ),
      profil: (
        <div className="content-section">
          <h1>Profil Organisasi</h1>
          <p>Kami adalah institusi yang dibangun dengan fondasi kuat dan visi jangka panjang untuk memberikan dampak positif bagi masyarakat.</p>
          <div className="info-grid">
            <div className="info-card">
              <h3>Didirikan</h3>
              <p>Tahun 2008</p>
            </div>
            <div className="info-card">
              <h3>Lokasi Utama</h3>
              <p>Jakarta, Indonesia</p>
            </div>
            <div className="info-card">
              <h3>Karyawan</h3>
              <p>150+ profesional</p>
            </div>
            <div className="info-card">
              <h3>Cabang</h3>
              <p>12 kota besar</p>
            </div>
          </div>
        </div>
      ),
      visiMisi: (
        <div className="content-section">
          <h1>Visi, Misi & Tujuan</h1>
          
          <div className="mission-box">
            <h2>Visi</h2>
            <p>Menjadi pemimpin industri yang diakui secara global dalam memberikan solusi inovatif dan berkelanjutan untuk meningkatkan kualitas hidup masyarakat.</p>
          </div>

          <div className="mission-box">
            <h2>Misi</h2>
            <ul>
              <li>Mengembangkan dan menerapkan teknologi terkini untuk efisiensi optimal</li>
              <li>Memberikan layanan berkualitas tinggi dengan harga terjangkau</li>
              <li>Memberdayakan komunitas lokal melalui program pelatihan dan pengembangan</li>
              <li>Menjaga standar etika bisnis dan tanggung jawab sosial</li>
            </ul>
          </div>

          <div className="mission-box">
            <h2>Tujuan</h2>
            <ul>
              <li>Mencapai pertumbuhan berkelanjutan 20% per tahun</li>
              <li>Memperluas jangkauan layanan ke 25 kota pada 2025</li>
              <li>Meningkatkan kepuasan pelanggan menjadi 95%</li>
              <li>Mengurangi jejak karbon sebesar 40% dalam 5 tahun ke depan</li>
            </ul>
          </div>
        </div>
      ),
      sejarah: (
        <div className="content-section">
          <h1>Sejarah Organisasi</h1>
          <div className="timeline">
            <div className="timeline-item">
              <span className="year">2008</span>
              <h3>Pendirian</h3>
              <p>Organisasi kami didirikan dengan visi sederhana namun kuat untuk membuat perbedaan.</p>
            </div>
            <div className="timeline-item">
              <span className="year">2010</span>
              <h3>Ekspansi Pertama</h3>
              <p>Pembukaan kantor cabang pertama di Bandung dan Surabaya.</p>
            </div>
            <div className="timeline-item">
              <span className="year">2014</span>
              <h3>Akreditasi Internasional</h3>
              <p>Meraih sertifikasi ISO 9001 dan pengakuan internasional.</p>
            </div>
            <div className="timeline-item">
              <span className="year">2018</span>
              <h3>Transformasi Digital</h3>
              <p>Implementasi sistem digital terpadu dan modernisasi operasional.</p>
            </div>
            <div className="timeline-item">
              <span className="year">2023</span>
              <h3>Pencapaian Saat Ini</h3>
              <p>Telah melayani lebih dari 500,000 pelanggan dan terus berkembang.</p>
            </div>
          </div>
        </div>
      ),
      legalitas: (
        <div className="content-section">
          <h1>Legalitas Formal</h1>
          <div className="legal-info">
            <div className="legal-card">
              <h3>Izin Usaha</h3>
              <p><strong>Nomor:</strong> PT-2008-00123-IND</p>
              <p><strong>Tanggal Penerbitan:</strong> 15 Januari 2008</p>
              <p><strong>Lembaga Penerbit:</strong> Kementerian Hukum dan HAM</p>
            </div>

            <div className="legal-card">
              <h3>Nomor Induk Berusaha (NIB)</h3>
              <p><strong>NIB:</strong> 1234567890123456</p>
              <p><strong>Status:</strong> Aktif</p>
            </div>

            <div className="legal-card">
              <h3>NPWP Perusahaan</h3>
              <p><strong>NPWP:</strong> 12.345.678.9-012.345</p>
              <p><strong>Nama Terdaftar:</strong> PT Portofolio Indonesia</p>
            </div>

            <div className="legal-card">
              <h3>Akta Pendirian</h3>
              <p><strong>Nomor Akta:</strong> 20/2008</p>
              <p><strong>Notaris:</strong> Budi Santoso, S.H.</p>
              <p><strong>Pengesahan:</strong> Kemenhumham RI No. 4567/BH/2008</p>
            </div>
          </div>
        </div>
      ),
      akreditasi: (
        <div className="content-section">
          <h1>Akreditasi & Sertifikasi</h1>
          <div className="accreditation-list">
            <div className="accred-card">
              <h3>ISO 9001:2015</h3>
              <p><strong>Standar:</strong> Sistem Manajemen Mutu</p>
              <p><strong>Tanggal Sertifikasi:</strong> 10 Juni 2015</p>
              <p><strong>Lembaga Sertifikasi:</strong> Bureau Veritas</p>
            </div>

            <div className="accred-card">
              <h3>ISO 14001:2015</h3>
              <p><strong>Standar:</strong> Sistem Manajemen Lingkungan</p>
              <p><strong>Tanggal Sertifikasi:</strong> 15 September 2016</p>
              <p><strong>Lembaga Sertifikasi:</strong> TÜV Rheinland</p>
            </div>

            <div className="accred-card">
              <h3>ISO 45001:2018</h3>
              <p><strong>Standar:</strong> Sistem Manajemen Keselamatan dan Kesehatan Kerja</p>
              <p><strong>Tanggal Sertifikasi:</strong> 20 Maret 2019</p>
              <p><strong>Lembaga Sertifikasi:</strong> Lloyd's Register</p>
            </div>

            <div className="accred-card">
              <h3>Akreditasi Nasional</h3>
              <p><strong>Lembaga:</strong> Lembaga Akreditasi Nasional (LAM)</p>
              <p><strong>Status:</strong> Terakreditasi A</p>
              <p><strong>Berlaku hingga:</strong> Desember 2026</p>
            </div>
          </div>
        </div>
      ),
      struktur: (
        <div className="content-section">
          <h1>Struktur Organisasi</h1>
          <div className="org-structure">
            <div className="org-level">
              <div className="org-box ceo">
                <h3>CEO</h3>
                <p>Direktur Utama</p>
              </div>
            </div>

            <div className="org-level">
              <div className="org-box">
                <h3>Direktur Operasional</h3>
                <p>Operasi & Produksi</p>
              </div>
              <div className="org-box">
                <h3>Direktur Keuangan</h3>
                <p>Keuangan & Akuntansi</p>
              </div>
              <div className="org-box">
                <h3>Direktur SDM</h3>
                <p>Sumber Daya Manusia</p>
              </div>
            </div>

            <div className="org-level">
              <div className="org-box">
                <h3>Divisi Produksi</h3>
              </div>
              <div className="org-box">
                <h3>Divisi Pemasaran</h3>
              </div>
              <div className="org-box">
                <h3>Divisi IT</h3>
              </div>
              <div className="org-box">
                <h3>Divisi Kualitas</h3>
              </div>
            </div>
          </div>
        </div>
      )
    };

    return contentMap[currentPage] || contentMap.home;
  };

  return (
    <div className="portfolio-container">
      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
          background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
          min-height: 100vh;
        }

        .portfolio-container {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
        }

        header {
          background: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%);
          color: white;
          padding: 0;
          box-shadow: 0 4px 20px rgba(30, 60, 114, 0.3);
          position: sticky;
          top: 0;
          z-index: 100;
        }

        .header-content {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .logo {
          font-size: 1.8rem;
          font-weight: 700;
          letter-spacing: -0.5px;
          padding: 1.5rem 0;
          background: linear-gradient(135deg, #fff 0%, #e0e7ff 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        nav {
          display: flex;
          align-items: center;
          gap: 3rem;
        }

        .nav-item {
          position: relative;
        }

        .nav-link {
          color: white;
          text-decoration: none;
          font-weight: 500;
          font-size: 0.95rem;
          padding: 0.5rem 0;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          cursor: pointer;
          transition: all 0.3s ease;
          position: relative;
        }

        .nav-link:hover {
          color: #a8d8ff;
        }

        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -5px;
          left: 0;
          width: 0;
          height: 2px;
          background: #a8d8ff;
          transition: width 0.3s ease;
        }

        .nav-link:hover::after {
          width: 100%;
        }

        .nav-link.active {
          color: #a8d8ff;
        }

        .nav-link.active::after {
          width: 100%;
        }

        .dropdown-toggle {
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 0.4rem;
        }

        .dropdown-menu {
          position: absolute;
          top: 100%;
          left: 0;
          background: white;
          border-radius: 8px;
          min-width: 280px;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.15);
          margin-top: 0.5rem;
          opacity: 0;
          visibility: hidden;
          transform: translateY(-10px);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .dropdown-menu.open {
          opacity: 1;
          visibility: visible;
          transform: translateY(0);
        }

        .dropdown-item {
          padding: 1rem 1.5rem;
          color: #1e3c72;
          text-decoration: none;
          cursor: pointer;
          font-size: 0.95rem;
          border-bottom: 1px solid #f0f0f0;
          transition: all 0.2s ease;
          display: flex;
          align-items: center;
          gap: 0.8rem;
        }

        .dropdown-item:last-child {
          border-bottom: none;
        }

        .dropdown-item:hover {
          background: #f8f9ff;
          padding-left: 2rem;
          color: #2a5298;
        }

        .dropdown-icon {
          width: 18px;
          height: 18px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .chevron {
          width: 16px;
          height: 16px;
          transition: transform 0.3s ease;
        }

        .dropdown-toggle.active .chevron {
          transform: rotate(180deg);
        }

        main {
          flex: 1;
          max-width: 1200px;
          margin: 0 auto;
          width: 100%;
          padding: 3rem 2rem;
        }

        .content-section {
          background: white;
          border-radius: 12px;
          padding: 3rem;
          box-shadow: 0 10px 40px rgba(30, 60, 114, 0.1);
          animation: slideInUp 0.5s ease;
        }

        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        h1 {
          color: #1e3c72;
          font-size: 2.5rem;
          margin-bottom: 1.5rem;
          border-bottom: 3px solid #2a5298;
          padding-bottom: 1rem;
        }

        h2 {
          color: #2a5298;
          font-size: 1.8rem;
          margin-top: 2rem;
          margin-bottom: 1rem;
        }

        h3 {
          color: #1e3c72;
          font-size: 1.3rem;
          margin-bottom: 0.8rem;
        }

        p {
          color: #555;
          line-height: 1.8;
          margin-bottom: 1rem;
          font-size: 0.95rem;
        }

        ul {
          margin-left: 1.5rem;
          margin-bottom: 1rem;
        }

        li {
          color: #555;
          margin-bottom: 0.8rem;
          line-height: 1.8;
        }

        .highlight-box {
          background: linear-gradient(135deg, #f0f4ff 0%, #e8eeff 100%);
          border-left: 4px solid #2a5298;
          padding: 2rem;
          border-radius: 8px;
          margin: 2rem 0;
        }

        .highlight-box h3 {
          color: #1e3c72;
          margin-bottom: 1rem;
        }

        .info-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 1.5rem;
          margin-top: 2rem;
        }

        .info-card {
          background: linear-gradient(135deg, #f8f9ff 0%, #f0f4ff 100%);
          padding: 2rem;
          border-radius: 8px;
          border: 1px solid #e0e8ff;
          transition: all 0.3s ease;
        }

        .info-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 30px rgba(42, 82, 152, 0.15);
        }

        .info-card h3 {
          color: #2a5298;
          margin-bottom: 0.8rem;
        }

        .info-card p {
          color: #1e3c72;
          font-size: 1.1rem;
          font-weight: 500;
        }

        .mission-box {
          background: linear-gradient(135deg, #fff8f0 0%, #fff0f8 100%);
          padding: 2rem;
          margin: 2rem 0;
          border-radius: 8px;
          border-left: 4px solid #2a5298;
        }

        .mission-box h2 {
          color: #2a5298;
          margin-top: 0;
          margin-bottom: 1.2rem;
        }

        .timeline {
          position: relative;
          padding: 2rem 0;
        }

        .timeline::before {
          content: '';
          position: absolute;
          left: 30px;
          top: 0;
          bottom: 0;
          width: 2px;
          background: linear-gradient(180deg, #2a5298 0%, #a8d8ff 100%);
        }

        .timeline-item {
          padding: 2rem;
          padding-left: 100px;
          margin-bottom: 2rem;
          position: relative;
          background: white;
          border-radius: 8px;
          border-left: 4px solid #f0f4ff;
        }

        .timeline-item::before {
          content: '';
          position: absolute;
          left: 20px;
          top: 25px;
          width: 20px;
          height: 20px;
          background: white;
          border: 3px solid #2a5298;
          border-radius: 50%;
        }

        .year {
          position: absolute;
          left: 100px;
          top: 0;
          color: #2a5298;
          font-weight: 700;
          font-size: 1.2rem;
        }

        .timeline-item h3 {
          color: #1e3c72;
          margin-bottom: 0.5rem;
          margin-top: 0;
        }

        .legal-info, .accreditation-list {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
          margin-top: 2rem;
        }

        .legal-card, .accred-card {
          background: linear-gradient(135deg, #f8f9ff 0%, #f0f4ff 100%);
          padding: 2rem;
          border-radius: 8px;
          border-left: 4px solid #2a5298;
          box-shadow: 0 4px 15px rgba(42, 82, 152, 0.08);
          transition: all 0.3s ease;
        }

        .legal-card:hover, .accred-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 30px rgba(42, 82, 152, 0.15);
        }

        .legal-card h3, .accred-card h3 {
          color: #2a5298;
          margin-top: 0;
          border-bottom: 2px solid #a8d8ff;
          padding-bottom: 0.8rem;
          margin-bottom: 1rem;
        }

        .legal-card p, .accred-card p {
          margin-bottom: 0.6rem;
          font-size: 0.9rem;
        }

        .org-structure {
          margin-top: 3rem;
        }

        .org-level {
          display: flex;
          justify-content: center;
          gap: 2rem;
          margin-bottom: 3rem;
          flex-wrap: wrap;
        }

        .org-box {
          background: linear-gradient(135deg, #f0f4ff 0%, #e8eeff 100%);
          padding: 1.5rem 2rem;
          border-radius: 8px;
          border: 2px solid #2a5298;
          min-width: 200px;
          text-align: center;
          box-shadow: 0 4px 15px rgba(42, 82, 152, 0.1);
          transition: all 0.3s ease;
        }

        .org-box.ceo {
          background: linear-gradient(135deg, #2a5298 0%, #1e3c72 100%);
          color: white;
          border: 2px solid #1e3c72;
          min-width: 250px;
          padding: 2rem;
        }

        .org-box:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 30px rgba(42, 82, 152, 0.2);
        }

        .org-box h3 {
          color: #2a5298;
          margin: 0 0 0.5rem 0;
          font-size: 1rem;
        }

        .org-box.ceo h3 {
          color: white;
        }

        .org-box p {
          color: #666;
          font-size: 0.85rem;
          margin: 0;
        }

        .org-box.ceo p {
          color: #a8d8ff;
        }

        .news-container {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 2rem;
          margin-top: 2rem;
        }

        .news-card {
          background: linear-gradient(135deg, #f8f9ff 0%, #f0f4ff 100%);
          border-left: 4px solid #2a5298;
          padding: 2rem;
          border-radius: 8px;
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px rgba(42, 82, 152, 0.08);
        }

        .news-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 12px 30px rgba(42, 82, 152, 0.15);
        }

        .news-date {
          color: #2a5298;
          font-size: 0.85rem;
          font-weight: 600;
          margin-bottom: 0.8rem;
        }

        .news-card h3 {
          color: #1e3c72;
          margin-top: 0;
          margin-bottom: 1rem;
        }

        .read-more {
          color: #2a5298;
          text-decoration: none;
          font-weight: 500;
          display: inline-block;
          margin-top: 1rem;
          transition: all 0.3s ease;
        }

        .read-more:hover {
          color: #1e3c72;
          transform: translateX(5px);
        }

        .faculty-info {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 1.5rem;
          margin: 2rem 0;
        }

        .facility-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
          gap: 1.5rem;
          margin: 2rem 0;
        }

        .facility-card {
          background: linear-gradient(135deg, #fff0f8 0%, #f8f0ff 100%);
          padding: 1.8rem;
          border-radius: 8px;
          border: 2px solid #e0c8ff;
          transition: all 0.3s ease;
        }

        .facility-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 30px rgba(42, 82, 152, 0.12);
        }

        .facility-card h3 {
          color: #2a5298;
          margin-top: 0;
          margin-bottom: 0.8rem;
          font-size: 1.1rem;
        }

        .facility-card p {
          color: #666;
          font-size: 0.9rem;
          margin: 0;
        }

        .program-detail {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 1.5rem;
          margin: 2rem 0;
        }

        .detail-box {
          background: linear-gradient(135deg, #f0f4ff 0%, #e8eeff 100%);
          padding: 1.5rem;
          border-radius: 8px;
          border-left: 4px solid #2a5298;
          text-align: center;
        }

        .detail-box h3 {
          color: #2a5298;
          margin-top: 0;
          font-size: 1rem;
        }

        .detail-box p {
          color: #1e3c72;
          font-weight: 500;
          margin: 0;
        }

        .career-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
          gap: 1.2rem;
          margin: 2rem 0;
        }

        .career-card {
          background: linear-gradient(135deg, #2a5298 0%, #1e3c72 100%);
          color: white;
          padding: 1.5rem;
          border-radius: 8px;
          text-align: center;
          font-weight: 500;
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px rgba(42, 82, 152, 0.2);
        }

        .career-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 30px rgba(42, 82, 152, 0.3);
        }
          .header-content {
            flex-direction: column;
            gap: 1rem;
            padding: 1rem;
          }

          nav {
            gap: 1.5rem;
            width: 100%;
            justify-content: center;
            flex-wrap: wrap;
          }

          main {
            padding: 1.5rem 1rem;
          }

          .content-section {
            padding: 1.5rem;
          }

          h1 {
            font-size: 1.8rem;
          }

          .dropdown-menu {
            min-width: 240px;
          }
        }
      `}</style>

      <header>
        <div className="header-content">
          <div className="logo">Portfolio</div>
          <nav>
            <div className="nav-item">
              <a
                className={`nav-link ${currentPage === 'home' ? 'active' : ''}`}
                onClick={() => {
                  setCurrentPage('home');
                  setOpenDropdown(null);
                }}
              >
                Home
              </a>
            </div>

            <div className="nav-item">
              <a
                className={`nav-link ${currentPage === 'berita' ? 'active' : ''}`}
                onClick={() => {
                  setCurrentPage('berita');
                  setOpenDropdown(null);
                }}
              >
                Berita
              </a>
            </div>

            <div className="nav-item">
              <div
                className={`nav-link dropdown-toggle ${openDropdown === 'fakultas' ? 'active' : ''}`}
                onClick={() => setOpenDropdown(openDropdown === 'fakultas' ? null : 'fakultas')}
              >
                Fakultas
                <ChevronDown className="chevron" size={16} />
              </div>
              <div className={`dropdown-menu ${openDropdown === 'fakultas' ? 'open' : ''}`}>
                {fakultasSubMenu.map((item) => (
                  <div
                    key={item.id}
                    className="dropdown-item"
                    onClick={() => {
                      setCurrentPage(item.id);
                      setOpenDropdown(null);
                    }}
                  >
                    <span className="dropdown-icon">🏛️</span>
                    {item.label}
                  </div>
                ))}
              </div>
            </div>

            <div className="nav-item">
              <div
                className={`nav-link dropdown-toggle ${openDropdown === 'prodi' ? 'active' : ''}`}
                onClick={() => setOpenDropdown(openDropdown === 'prodi' ? null : 'prodi')}
              >
                Program Studi
                <ChevronDown className="chevron" size={16} />
              </div>
              <div className={`dropdown-menu ${openDropdown === 'prodi' ? 'open' : ''}`}>
                {programStudiSubMenu.map((item) => (
                  <div
                    key={item.id}
                    className="dropdown-item"
                    onClick={() => {
                      setCurrentPage(item.id);
                      setOpenDropdown(null);
                    }}
                  >
                    <span className="dropdown-icon">📚</span>
                    {item.label}
                  </div>
                ))}
              </div>
            </div>

            <div className="nav-item">
              <div
                className={`nav-link dropdown-toggle ${openDropdown === 'tentang' ? 'active' : ''}`}
                onClick={() => setOpenDropdown(openDropdown === 'tentang' ? null : 'tentang')}
              >
                Tentang Kami
                <ChevronDown className="chevron" size={16} />
              </div>
              <div className={`dropdown-menu ${openDropdown === 'tentang' ? 'open' : ''}`}>
                {aboutSubMenu.map((item) => (
                  <div
                    key={item.id}
                    className="dropdown-item"
                    onClick={() => {
                      setCurrentPage(item.id);
                      setOpenDropdown(null);
                    }}
                  >
                    <span className="dropdown-icon">ℹ️</span>
                    {item.label}
                  </div>
                ))}
              </div>
            </div>
          </nav>
        </div>
      </header>

      <main>
        {renderContent()}
      </main>
    </div>
  );
}
