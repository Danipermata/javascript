// MENGEMBALIKAN NILAI FUNCTION
// function test(){
//     var data = "isinya";
//     return data;
// }

// var tampung = test();

// console.log(tampung);

// MEMBUAT PARAMETER PADA FUNCTION
// function mintaData(x,y,z){
// console.log(x,y,z);
// console.log(y);
// console.log(z);
// }

// mintaData("satu",1,"dua")

// DEFAULT JAVASCRIPT
// function data(x = 10){
//     console.log(x);
// }

// data(80);

// TEST
// function ujiCoba(x){
//     console.log(x)
// }

// ujiCoba (10)

// function test(){
//    return ujiCoba (20);
// }

// test();

// IF ELSE
// function jalanSatu(){
//     var nilai = 10;

//     // if(nilai === 10){
//     //     console.log("Benar")
//     // }else if(nilai === 5){
//     //     console.log("Setengah")
//     // }else{
//     //     console.log("Salah")
//     // }

//     if(nilai === 10)console.log("Benar")
//     else if(nilai === 5)console.log("Setengah")
//     else console.log("Salah")
// }

// jalanSatu()

// IF ELSE IF
// var nilai = 8; 

// if(nilai = 10)console.log("A")
// else if(nilai <= 9 && nilai >= 7)console.log("B")
// else if(nilai <= 6 && nilai >= 5)console.log("C")
// else console.log("Bodoh")

// NESTED IF
// var x = 20; 
// var y = 20;
// var z = 30;

// if (x>=y){
//     if(x>z){
//         console.log("X adalah yang paling besar");
//     }else{
//         console.log("X adalah yang terbesar kedua");
//     }
// }else{
//     if(x<z){
//         console.log("X adalah yang paling kecil");
//     }else{
//         console.log("X yang terkecil kedua");
//     }
// }

// IF ELSE BERDASARKAN TIPE DATA
// function tipeData(){
//     var data = 'JAKARTA'
//     console.log(typeof(data))
//     if (data === 'JAKARTA'){
//         return data
//     }else{
//         return 'gagal'
//     }
// }

// console.log(tipeData())

// STRUKTUR LOGIKA SWITCH
// function testing(){
//     var tb1 = 170;

//     switch(nilai){
//         case 170 :
//             console.log('pertama');
//             break;
//         case 165 :
//             console.log("kedua");
//             break;
//         case 150 :
//             console.log('ketiga');
//             break;
//         default :
//             console.log('terakhir');
//             break;
//     }
// }

// testing()

// PERULANGAN FOR
// function ulang(){
//     for (var i = 1 ; i < 10 ; i++){
//         console.log('jalan :', i);
//     }
// }
// ulang()

// PERULANGAN WHILE
// var i = 0;

// while (i<10){
//     console.log('urutan', i)
//     i++;
// }

// DO WHILE
// var i = 100;

// do{
//     console.log('ini yang ke', i)
//     i++;
// }while(i<10)

// NESTED LOOP
// for(var i=0; i < 2; i++){
//     console.log("i ke", i)
//     for(var j=0; j < 2; j++){
//         console.log("j ke", j)
//     }
//     console.log("")
// }

// INFINITY LOOP
// for (var i = 0; i>=0 ; i++){
//     console.log(i)
// }

// var i = 1;
// while(true){
//     console.log(i)
//     i++;
// }

// BREAK AND CONTINUE
// for(var i=0; i < 10 ; i++){
//     if(i==6)
//     continue
//     console.log(i)
// }

// for(var i=0; i < 10 ; i++){
//     if(i==6)
//     break
//     console.log(i)
// }

// NESTED ARRAY
// function panggilArray(){
//     var dataNama  = [
//         ["Ab", "Ac", "Ad"],
//         ["Bola1","Bola2","Bola3"],
//         ["Rem1","Rem2","Rem3"]
//     ]
//     console.log(dataNama.length)
//     console.log(dataNama[0][0])
// }
// panggilArray()

// ARRAY PERULANGAN
// var angka = [5,4,3,2,1];
// for(var i=0;i<angka.length;i++){
//     console.log(angka[i])
// }

// FOR OF
// var angka = [0,1,2,3,4,5];
// for(let x of angka){
//     console.log(x)
// }

// OBJECTS
// function panggilObject(){
//     var mobil = {
//         type : 'sedan',
//         harga : 200000,
//         warna : 'putih',
//     }
//     console.log(mobil)
//     console.log(mobil.harga)
// }
// panggilObject()

// ARRAY DALAM OBJECT
// function panggilObject(){
//     var mobil = {
//         type : 'sedan',
//         harga : 200000,
//         warna : 'putih',
//         tahun : [2001,2002,2003,2004]
//     }
//     console.log(mobil)
//     console.log(mobil.harga)
//     console.log(mobil.tahun[0])
// }
// panggilObject()

// OBJECT PROPERTY
// function panggilObject(){
//     var mobil = {
//         type : 'sedan',
//         harga : 200000,
//         warna : 'putih',
//         tahun : [2001,2002,2003,2004]
//     }
//     mobil.harga = 5000; //untuk mengubah isi property dari object
//     console.log(mobil)
//     console.log(mobil.harga)
// }
// panggilObject()

// TAMBAH PRPERTY
// function panggilObject(){
//     var mobil = {
//         type : 'sedan',
//         harga : 200000,
//         warna : 'putih',
//     }
//     mobil.tahun = 2018;
//     console.log(mobil)
// }
// panggilObject() 

// MENGUBAH OBJECT PROPERTY
// function panggilObject(){
//     var mobil = {
//         type : 'sedan',
//         harga : 200000,
//         warna : 'putih',
//     }
//     mobil.tahun = 2018;
//     mobil.type = 'kijang';
//     mobil.type = true;
//     console.log(mobil)
// }
// panggilObject() 

// FUNCTION DALAM OBJECT
// function fungsiObject(){
//     var x = {
//         pesan : halo(),
//     }
//     console.log(x.pesan);
// }

// function halo(){
//     return 'Halo teman - teman';
// }
// fungsiObject();

// NESTED OBJECT
// function nestedObject(){
//     var mahasiswa = {
//         nama : 'dani',
//         ipk : {
//             semester1 : 3.8,
//             semester2 : 3.9,
//             semester3 : 3.7,
//             semeter4 : 3.9,
//         }
//     }
//     console.log(mahasiswa.ipk.semester2)
// }
// nestedObject()

// FOR IN
// function panggilObject(){
//     var mahasiswa = {
//         nama : 'dani',
//         umur : 21,
//         jurusan : 'manajemen',
//         semester : 5,
//     }
//     for ( var x in mahasiswa){
//         console.log(mahasiswa[x])
//     }
// }
// panggilObject()

// MENGECEK TIPE DATA
// function cekTipeData(){
//     var data = "Nama";
//     var berkas = 20;
//     var object = {
//         nama : 'haha',
//         umur : 21,
//     }
//     console.log(typeof(data))
//     console.log(typeof(berkas))
//     console.log(typeof(object))
// }
// cekTipeData()

// OPERATOR
// function panggilOperator(){
//     var a = 4;
//     var b = 3;
//     return a+b
// }
// console.log(panggilOperator())

// ARITMATIKA
// var a = 10;
// var b = 20;

// console.log(a + b) //penjumlahan
// console.log(b - a) //pengurangan
// console.log(a * b) //perkalian
// console.log(a / b) //pembagian
// console.log(b % a) //sisa bagi (modulo)

// INCREMENT DAN DECREMENT
// var x = 0;
// console.log(x)
// x++; //increment
// console.log(x)
// x++; //increment
// console.log(x)

// var x = 0;
// console.log(x)
// x--; //decrement
// console.log(x)
// x--; //decrement
// console.log(x)

// OPERATOR PERBANDINGAN
// var x = 10;
// var z = 11;

// console.log(x>z)
// console.log(x<z)
// console.log(x>=z)
// console.log(x<=z)
// console.log(x==z)
// console.log(x===z)
// console.log(x!=z)
// console.log(x!==z)

// OPERATOR LOGIKA
// var x = 10;

// console.log(x>10 && x<20) //and
// console.log(x>10 || x<20) //or
// console.log(!true) //not (negasi)

// OPERATOR STRING
// var x = "halo";
// var y = "teman";
// var angka = 10;
// var z = x + y + angka;

// console.log(z)

// OPERATOR ASSIGNMENT
// var x;
// var y;
// var z;
// x = 10;
// y = 20;
// z = 30;
// console.log(x,y,z)
// x = 20;
// y = 40;
// z = 60;
// console.log(x,y,z)

// OPERATOR SPREAD
// var angka1 = [0,1,2,3,4,5]
// var angka2 = [6,7,8,9,10]
// var gabungan = [...angka1,...angka2];
// console.log(angka1, angka2)
// console.log(gabungan)

// URUTAN OPERATOR DALAM JAVASCRIPT
//()
// */ %
// + -
// == != === !=
// &&
// ||

// var x = 10 + 3 * 10;
// var y = (10 + 3) * 10;
// console.log(x)





