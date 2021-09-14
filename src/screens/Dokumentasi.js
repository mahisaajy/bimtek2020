import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import { Link as RouterLink } from 'react-router-dom'
import Box from '@material-ui/core/Box';


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      // textDecoration: 'none'
    },
    media: {
      height: 140,
    },

    icon: {
      marginRight: theme.spacing(2),
    },
    heroContent: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(8, 0, 6),
    },
    heroButtons: {
      marginTop: theme.spacing(4),
    },
    cardGrid: {
      paddingTop: theme.spacing(8),
      paddingBottom: theme.spacing(8),
    },
    card: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
    },
    cardMedia: {
      paddingTop: '56.25%', // 16:9
    },
    cardContent: {
      flexGrow: 1,
    },
    footer: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(6),
    },
  }));
  
const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function LinkExternal() {
  return (
  <RouterLink path='/privacy-policy' component={() => { 
     window.location.href = 'https://example.com/1234'; 
     return null;
  }}/>
  )
}

function CustomCard({title, description, imagemedia, linkto}) {
  const classes = useStyles();

  return (
    <Link href={linkto} underline='none' target="_blank" rel="noopener">
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            //image="https://material-ui.com/static/images/cards/contemplative-reptile.jpg"
            image={require('../assets/'+imagemedia)}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {description}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Download
          </Button>
          {/* <Button size="small" color="primary">
            Learn More
          </Button> */}
        </CardActions>
      </Card>
    </Link>
  )
}

export default function Dokumentasi() {
    const classes = useStyles();
    
    return (
        <Container className={classes.cardGrid} maxWidth="lg">
          {/* End hero unit */}

          <Container className={classes.container}  maxWidth="lg" align="center">
            <Typography variant="h4" gutterBottom>
              Materi
            </Typography>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={4} md={4}>
                <CustomCard title={'Pengarahan Bimbingan Teknis Pengelola Database 2020'} description={'Muhammad Sadly - Plt. Deputi Bidang Instrumentasi, Kalibrasi, Rekayasa dan Jaringan Komunikasi'} imagemedia={'pemateri-pltdi.jpg'} linkto={'https://drive.google.com/file/d/1w02gswly7Kq6cdvatGsAqLqYBp04TBSQ/view?usp=sharing'} />
              </Grid>
              <Grid item xs={12} sm={4} md={4}>
                <CustomCard title={'Pembekalan Bimbingan Teknis Online Pengelola Database 2020'} description={'Edward Trihadi - Kepala Pusat Database'} imagemedia={'agenda2.jpg'} linkto={'https://drive.google.com/file/d/1L68HLwRtoW6mcQcwq57458kGuzY7W9S0/view?usp=sharing'} />
              </Grid>
              <Grid item xs={12} sm={4} md={4}>
                <CustomCard title={'Pengantar OOP (One Observation Policy)'} description={'Sunaryo - Kepala Bidang Pemeliharaan Database'} imagemedia={'agenda2.jpg'} linkto={'https://drive.google.com/file/d/1Tz15HMiMleOHr8JFgiDpS6anxwUY4fY_/view?usp=sharing'} />
              </Grid>
              <Grid item xs={12} sm={4} md={4}>
                <CustomCard title={'Sosialisasi QM, QA, dan QC Data Cuaca dan Iklim'} description={'Urip Haryoko - Perekayasa Utama (Puslitbang)'} imagemedia={'agenda2.jpg'} linkto={'https://drive.google.com/file/d/1vIkAPiEeps03cJzGPL_n9c947U6XmKfS/view?usp=sharing'} />
              </Grid>

              <Grid item xs={12} sm={4} md={4}>
                <CustomCard title={'Kondisi Data MKG Saat Ini'} description={'Tri Nurmayati - Kepala Sub Bidang Manajemen Database MKG'} imagemedia={'agenda2.jpg'} linkto={'https://drive.google.com/file/d/1xaQsT-FTK9ilj_7loQbTRE72NpJorU0-/view?usp=sharing'} />
              </Grid>
              <Grid item xs={12} sm={4} md={4}>
                <CustomCard title={'Basis Data Sistem Rasional'} description={'Nurhayati Rahayu - Staff Sub Bidang Pengembangan Database Umum'} imagemedia={'agenda2.jpg'} linkto={'https://drive.google.com/file/d/1Bu_kMGzyxzbv2ooZO0VO-JY6ZAcjfO1D/view?usp=sharing'} />
              </Grid>
              <Grid item xs={12} sm={4} md={4}>
                <CustomCard title={'Sistem BMKGSoft'} description={'Novia Ardhy - Staff Sub Bidang Pemeliharaan Database MKG'} imagemedia={'agenda2.jpg'} linkto={'https://drive.google.com/file/d/1O1x1dOt8VOaUBgrfV1QJrNZWcpbbtaGR/view?usp=sharing'} />
              </Grid>

              {/* Day3 */}
              <Grid item xs={12} sm={4} md={4}>
                <CustomCard title={'Penyelamatan Data MKGU'} description={'Indah Dwi Sulistyowati - Staff Sub Bidang Pemeliharaan Database Umum'} imagemedia={'coding.jpg'} linkto={'https://drive.google.com/drive/folders/1ScOr00C_5zHnOyyfTFaFj-8i5TL_uq_H?usp=sharing'} />
              </Grid>

              <Grid item xs={12} sm={4} md={4}>
                <CustomCard title={'Appsatker'} description={'Setia Adhi Dharma - Staff Sub Bidang Manajemen Database Umum'} imagemedia={'coding.jpg'} linkto={'https://drive.google.com/file/d/1n8MsJK6bM4408014-IkRnkOCTHtGDl6N/view?usp=sharing'} />
              </Grid>

              <Grid item xs={12} sm={4} md={4}>
                <CustomCard title={'Standarisasi Dokumen Pengembangan Aplikasi'} description={'Regina Yulia Yasmin - Kepala Sub Bidang Pengembangan Database Umum'} imagemedia={'coding.jpg'} linkto={'https://drive.google.com/file/d/1uBIaRcNwrY7jEyGTCm8cs0PIdBr5LL36/view?usp=sharing'} />
              </Grid>

              <Grid item xs={12} sm={4} md={4}>
                <CustomCard title={'Implementasi Metode QC Data Cuaca dan Iklim'} description={'Feizal Amri Permana - Kepala Sub Bidang Manajemen Database MKG'} imagemedia={'coding.jpg'} linkto={'https://drive.google.com/file/d/19-3RJZNd8ep-aP2qWorUPno6URBmQZKC/view?usp=sharing'} />
              </Grid>

              

              
              
              {/* <Grid item xs={12} sm={4} md={4}>
                <CustomCard title={'Sosialisasi QM, QA, dan QC Data Cuaca dan Iklim'} description={'Urip Haryoko - Perekayasa Utama'} imagemedia={'agenda2.jpg'} linkto={'#'} />
              </Grid> */}
            </Grid>
          </Container>
          
          <Box mt={8} />

          <Container className={classes.container}  maxWidth="lg" align="center">
            <Typography variant="h4" gutterBottom>
              Tools Pendukung
            </Typography>
            <Grid container spacing={3}>
              {/* <Grid item xs={12} sm={4} md={2}>
              </Grid> */}
              <Grid item xs={12} sm={4} md={4}>
                <CustomCard title={'STRIP Chart Digitizer'} description={'Pembacaan pias secara manual, membutuhkan keahlian khusus dan waktu yang lama sehingga seringkali pias hanya ditumpuk begitu saja. Untuk memudahkan pekerjaan Puslitbang telah mengembangkan software SRIP chart digitizer. STRIP chart digitizer merupakan program yang digunakan untuk mendigitasi pias menjadi data numerik dan disimpan dalam format CSV yang lebih fungsional. Software ini dilengkapi dengan fitur khusus berupa kemampuan untuk secara otomatis mendigitalkan garis dari plot. Pengguna hanya mengklik tombol read graph dan program secara otomatis akan membaca nilai numerik dari grafik. Program ini juga memungkinkan untuk mengedit grafik yang hilang/ tidak terbaca dengan meng-klik mouse pada setiap data point. Dilengkapi dengan fitur untuk menggabungkan dua gambar, program ini semakin memudahkan dalam digitalisasi data pias. Program ini memungkinkan mendigitalisasi pias Hillman, kelembaban, suhu dan tekanan udara'} imagemedia={'laptop.jpg'} linkto={'https://drive.google.com/file/d/1MYrU-YDh7Ozw0Wqqw6LZz4mrkj8ux-Vi/view?usp=sharing'} />
              </Grid>
              <Grid item xs={12} sm={4} md={4}>
                <CustomCard title={'Validasi Data Pengamatan Paralel'} description={'Otomatisasi pengukuran parameter-parameter meteorologi menjadi keharusan supaya BMKG menjadi organisasi modern dan berkelas dunia. Otomatisasi ini tidak bisa semerta-merta dijalankan dan menggantikan instrumen konvensional. Akan tetapi harus dijalankan secara beriringan dengan periode tertentu. Sehingga bias dan karakterisitik kedua data dapat dianalisa. Tool Validasi Data Pengamatan Paralel ditulis dalam Bahasa R yang dapat digunakan untuk membandingkan observasi manual dan otomatis terhadap parameter-parameter meteorologis, seperti curah hujan, temperatur, dew point, angin, tekanan udara, kelembapan, radiasi matahari, dan evaporasi. Tool telah digunakan untuk memvalidasi observasi paralel di 33 stasiun lokasi AWS-STR untuk pengamatan selama 1 tahun (Februari 2016 – Januari 2017). Selain itu, tool juga telah digunakan untuk menganalisis data AWS Digitalisasi periode Januari – Desember 2017 di 27 Stasiun. Hasil validasi dapat dijadikan sebagai acuan otomatisasi apabila selama periode validasi diperoleh nilai bias yang dapat diterima (acceptable). Tools ini merupakan salah satu quality control data sebelum digunakan lebih lanjut.'} imagemedia={'coding.jpg'} linkto={'https://drive.google.com/file/d/1bz0P0CluqJ_46vdONAweQsumHq73x75e/view?usp=sharing'} />
              </Grid>
              <Grid item xs={12} sm={4} md={4}>
                <CustomCard title={'Abbyy FineReader'} description={'ABBYY FineReader is an optical character recognition (OCR) application developed by ABBYY. The program allows the conversion of image documents (photos, scans, PDF files) into editable electronic formats. In particular, Microsoft Word, Microsoft Excel, Microsoft PowerPoint, Rich Text Format, HTML, PDF/A, searchable PDF, CSV and txt (plain text) files. Starting with version 11 files can be saved in the DjVu format. Version 15 supports recognition of text in 192 languages and has a built-in spell check for 48 of them. There are more than 20 million users of ABBYY FineReader worldwide. Based on FineReader optical character recognition, ABBYY licenses the technology to several companies such as Fujitsu, Panasonic, Xerox, Samsung and others.'} imagemedia={'lup.jpg'} linkto={'https://drive.google.com/drive/folders/1PiJyHzVo0wRt3hfRm7Q1AD4XpNt0fysG?usp=sharing'} />
              </Grid>
              {/* <Grid item xs={12} sm={4} md={4}>
                <CustomCard title={'Pengantar OOP (One Observation Policy)'} description={'Sunaryo - Kepala Bidang Pemeliharaan Database'} imagemedia={'agenda2.jpg'} linkto={'https://drive.google.com/file/d/1Tz15HMiMleOHr8JFgiDpS6anxwUY4fY_/view?usp=sharing'} />
              </Grid> */}
              {/* <Grid item xs={12} sm={4} md={4}>
                <CustomCard title={'Sosialisasi QM, QA, dan QC Data Cuaca dan Iklim'} description={'Urip Haryoko - Perekayasa Utama'} imagemedia={'agenda2.jpg'} linkto={'#'} />
              </Grid> */}
            </Grid>
          </Container>

          {/* <Grid container justify="center">
            <img src={'https://images.unsplash.com/photo-1565011761573-09d9db5ccd9b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80'} width="100%" />
          </Grid> */}

          {/* <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://source.unsplash.com/random"
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Heading
                    </Typography>
                    <Typography>
                      This is a media card. You can use this section to describe the content.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary">
                      View
                    </Button>
                    <Button size="small" color="primary">
                      Edit
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid> */}
        </Container>
    );
}