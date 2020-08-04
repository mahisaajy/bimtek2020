import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    // minWidth: 650,
  },
});

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rowsDay1 = [
  // createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  // createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  // createData('Eclair', 262, 16.0, 24, 6.0),
  // createData('Cupcake', 305, 3.7, 67, 4.3),
  // createData('Gingerbread', 356, 16.0, 49, 3.9),
  createData('08.30 - 09.00', 'Pembukaan Kegiatan Bimbingan Teknis Pengelola Database', 'Panitia'),
  createData('08.30 - 09.00',	'Peserta akses dan berada di Lobby Zoom',	'Panitia'),
  createData('09.00 - 09.10',	'Menyanyikan lagu Indonesia Raya dan Mars BMKG',	'MC'),
  createData('09.10 - 09.20',	'Laporan Ketua Panitia', 'KBMD'),
  createData('09.20 - 10.00',	'Pengarahan sekaligus Pembukaan Acara',	'Plt. DI'),
  createData('10.00 - 10.05',	'Pembacaan Do’a',	'Panitia'),
  createData('10.05 - 10.35',	'Pembekalan kepada Peserta Bimtek Pengelola Database',	'KPD'),
  createData('10.35 - 11.15',	'Sosialisasi OOP',	'KBLD'),
  createData('11.15 - 12.30',	'Sosialisasi QM, QA, dan QC Data Cuaca dan Iklim',	'Perekayasa Utama'),
  createData('12.30',	'Acara Pembukaan Selesai',	'MC'),

  


  
];

const rowsDay2 = [
  createData('08.30 - 09.00',	'Kondisi Data MKG Saat Ini',	'KBMD'),
  createData('09.00 - 09.30',	'Basis Data Sistem Rasional',	'KBBD'),
  createData('09.30 - 10.15',	'Sistem BMKGSoft',	'SLDM'),
  createData('10.15 - 11.00',	'Sistem AWS Center',	'SBDM'),
  createData('11.00 - 12.00',	'Implementasi Software Validasi Data Pengamatan Paralel',	'SMDM'),
];

const rowsDay3 = [
  createData('08.30 - 09.30',	'Penyelamatan Data MKGU',	'SLDU'),
  createData('09.30 - 10.15',	'Implementasi Metode QC Data Cuaca dan Iklim',	'SMDM'),
  createData('10.15 - 11.00',	'Standarisasi Dokumen Pengembangan Aplikasi',	'SBDU'),
  createData('11.00 - 11.45',	'Sistem Pengelolaan Database Umum',	'SMDU'),
  createData('11.45 - 12.00',	'Penutupan Kegiatan Bimbingan Teknis Pengelolaan Database',	'Panitia'),
  createData('12.00',	'Acara Selesai', 'Panitia'),	
];

export default function Agenda() {
    const classes = useStyles();

    return (
      <TableContainer component={Paper}>
        <Table stickyHeader className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Waktu</TableCell>
              <TableCell align="right">Kegiatan</TableCell>
              <TableCell align="right">PIC/Narasumber</TableCell>
              {/* <TableCell align="right">Carbs&nbsp;(g)</TableCell>
              <TableCell align="right">Protein&nbsp;(g)</TableCell> */}
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell />
              <TableCell align="right">Selasa, 11 Agustus 2020</TableCell>
              <TableCell />
            </TableRow>
            {rowsDay1.map((row) => (
              <TableRow key={row.name}>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.calories}</TableCell>
                <TableCell align="right">{row.fat}</TableCell>
                {/* <TableCell align="right">{row.carbs}</TableCell>
                <TableCell align="right">{row.protein}</TableCell> */}
              </TableRow>
            ))}

            <TableRow>
              <TableCell/>
              <TableCell align="right">Rabu, 12 Agustus 2020</TableCell>
              <TableCell />
            </TableRow>
            {rowsDay2.map((row) => (
              <TableRow key={row.name}>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.calories}</TableCell>
                <TableCell align="right">{row.fat}</TableCell>
                {/* <TableCell align="right">{row.carbs}</TableCell>
                <TableCell align="right">{row.protein}</TableCell> */}
              </TableRow>
            ))}

            <TableRow>
              <TableCell/>
              <TableCell align="right">Kamis, 13 Agustus 2020</TableCell>
              <TableCell />
              {/* <TableCell align="right">Hihi</TableCell> */}
            </TableRow>
            {rowsDay3.map((row) => (
              <TableRow key={row.name}>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.calories}</TableCell>
                <TableCell align="right">{row.fat}</TableCell>
                {/* <TableCell align="right">{row.carbs}</TableCell>
                <TableCell align="right">{row.protein}</TableCell> */}
              </TableRow>
            ))}
            
          </TableBody>
        </Table>
      </TableContainer>
    );
  }