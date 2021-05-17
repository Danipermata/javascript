// terminal di file ini = node index.js

// MANIPULASI ARRAY DENGAN SHIFT
// function panggilShift(){
//     var kota = ['jakarta', 'bandung', 'surabaya', 'makasar'];

    // console.log(kota)
    // console.log('==========')
    // kota2 = kota.shift();
    // console.log(kota2)
    // var kota2 = kota.shift()
    
    // return kota
// }

// console.log(panggilShift())

// MANUPULASI ARRAAY DENGAN POP
// function panggilPop(){
//     var kota = ['jakarta', 'bandung', 'surabaya', 'makasar'];
//     kota.pop()
//     return kota
// }

// console.log(panggilPop())

// MANIPULASI ARRAY DENGAN PUSH
// function panggilPush(){
//     var data = [1,2,3,4,5];
//     console.log(data)
//     data.push('jakarta')
//     return data
// }

// console.log(panggilPush())

// function tugas(){
//     var buah = ['pisang','jeruk','apel','mangga']
//     buah.shift();
//     buah.pop();
//     return buah
// }
// console.log(tugas())

// MANUPULASI ARRAY DENGAN SPLICE
// function panggilSplice(){
//     var kota = ['jakarta', 'bandung', 'surabaya', 'makasar']
//     kota.splice(2,0,'palembang')
//     kota.splice(2,1,'palembang')
//     return kota
// }

// console.log(panggilSplice());

// MANIPULASI ARRAY DENGAN SPLICE 2
// function panggilSplice(){
//     var kota = ['jakarta', 'bandung', 'surabaya', 'makasar']
//     kota.splice(2,1)
//     return kota 
// }
// console.log(panggilSplice())

// MANIPULASI ARRAY DENGAN UNSHIFT
// function panggilUnShift(){
//     var data = ['jakarta', 'bandung', 'surabaya', 'makasar']
//     data.unshift('seoul','busan')
//     return data
// } 
// console.log(panggilUnShift())

// MATH OBJECT PROPERTY
// console.log(Math.E) //angka logaritma natural e
// console.log(Math.LN10)//angka logaritma narutal 10
// console.log(Math.LN2) //angka logaritma narutal 2
// console.log(Math.LOG10E)//angka logaritma natural e berbasis 10
// console.log(Math.LOG2E)//angka logaritma natural e berbasis 2
// console.log(Math.PI)//berisi angka pi 3,14xxxxx
// console.log(Math.SQRT1_2)//angka 1 dibagi dengan akar kuadrat 2
// console.log(Math.SQRT2)//angka akar kuadrat 2

// MATH ABS/ABSOLUT
// var x = 30
// var y = 40

// console.log(Math.abs(x-y))

// MATH POW
// var o = 4
// console.log(Math.pow(o,2))

// FUNGSI SQRT
// function akar(){
//     console.log(Math.sqrt(25))
// }
// akar()

// FUNGSI MATH LOG
// function log(){
//     console.log(Math.log10(100))
// }
// log()

// FUNGSI MATH MIN AND MAX
// function minMax(){
//     var min = Math.min(45,100,3,99,2);
//     console.log(min);
//     var max = Math.max(45,100,3,99,2);
//     console.log(max)
// }
// minMax()

// FUNGSI STRING  CHAR CODE AT
// function kodeAt(){
//     var kode = "saya belajar di pasar";
//     console.log(kode.charCodeAt(3))
// }
// kodeAt();

// FUNGSI STRING CODE POINT
// function kode(){
//     console.log(String.fromCodePoint(68));
// }
// kode()

// FUNGSI STRING LOWER CASE DAN UPPER CASE
// function ubah(){
//     var huruf = "Belajar di nimoc";
//     console.log(huruf.toLowerCase());
//     console.log(huruf.toUpperCase());
// }
// ubah()

// FUNGSI STRING CHAR AT
// function charAtu(){
//     var kata = "Saya ingin makan";
//     console.log(kata.charAt(3))
// }
// charAtu()

// FUNGSI STRING SUBSTRING
// function SubString(){
//     var aku = "Aku pintar memasak";
//     console.log(aku.substr(3))
// }
// SubString();

// FUNGSI STRING SPLIT
// function textSpring(){
//     var isi = "Aku pintar koding PHP";
    // console.log(isi.split());
    // console.log(isi.split(""));
    // console.log(isi.split(" "));
// }
// textSpring()

// FUNGSI STRING TRIM
// function trim(){
//     var kata = " saya ingin makan ";
//     console.log(kata);
//     console.log(kata.trim());
// }
// trim()

// FUNGSI STRING CONCAT
// function strConcat(){
//     var kal1 = "saya";
//     var kal2 = kal1.concat("Pintar");
//     console.log(kal2);
//     console.log(kal2.concat("memasak","nasi","goreng"));
// }
// strConcat();

// FUNGSI STRING INCLUDES
// function sinclude(){
//     var inc = "saya pintar memasak";
//     console.log(inc.includes('pintar'));
//     console.log(inc.includes('Pintar'));
// }
// sinclude()

// FUNGSI STRING START WITH DAN END WITH
// function StartEnd(){
    // var starte = "Saya pintar memasak nasi goreng";
//     console.log(starte.startsWith("saya"));
    // console.log(starte.startsWith("pintar",5));
//     console.log(starte.startsWith("Saya")); //mencari kata pada awal string
//     console.log(starte.endsWith("goreng")); //mencari kata pada akhir string
// }
// StartEnd()

// FUNGSI RTING REPEAT
// function repeat(){
//     var isi = "ayo belajar ";
//     console.log(isi.repeat(3));
//     console.log("ayo..".repeat(2))
// }
// repeat()

// FUNGSI KONVERSI STRING KE JS
// function konversi(){
//     var kon = new String("Belajar kuy ...");
//     console.log(typeof kon);
//     console.log(kon)

//     var konf = kon.toString();
//     console.log(typeof konf);
//     console.log(konf);
//     var konf2 = kon.valueOf();
//     console.log(typeof konf2);
//     console.log(konf2)
// }
// konversi()

// FUNGSI STRING INDEXOF
// function index(){
//     var isi = "saya belajar di rumah";
//     console.log(isi.indexOf("belajar"));
//     console.log(isi.indexOf("saya"));
// }
// index()

// FUNGSI STRING LAST IDNEX OF
// function last(){
//     var isi = "belajar bahasa dengan bahasa javascript";
//     console.log(isi.lastIndexOf("bahasa"));
//     console.log(isi.lastIndexOf("bahasa", 12));
// }
// last()

// FUNGSI STRING SEARCH
// function cari(){
//     var isi = "belajar di nimoic academy dengan fasih";
//     console.log(isi.search("di"));
//     console.log(isi.search(/di/));
// }
// cari()

// FUNGSI STRING MATCH
// function match(){
//     var isi = "saya pintar memasak nasi goreng";
//     console.log(isi.match("pintar"))
//     console.log(isi.match("goreng"))// untuk mencari reguler expression
//     console.log(isi.match(/goreng))// untuk mencari reguler expression hasilnya berupa array
// }
// match()

// FUNGSI STRING REPLACE
// function isi(){
//     var cari = "ini isi dari program";
//     console.log(cari.replace("program","penjualan"))
// }
// isi()

// PERINTAH REVERSE
// function panggilReverse(){
//     var kota = ['jakarta', 'medan', 'malang', 'bandung'];
//     console.log(kota)
//     var result = kota.reverse();
//     return result // return kota.reverse();
// }
// console.log(panggilReverse())

// MENGENAL PERINTAH CONCAT
// function panggilConcat(){
//     var kota = ['jakarta', 'medan', 'malang', 'bandung'];
//     var kabupaten = ['lampung timur', 'jombang', 'kediri']

//     var hasil = kota.concat(kabupaten)
//     return hasil
// }
// console.log(panggilConcat())

// FUNGSI ARRAY SLICE
// function slice2(){ //mengkopi isi array
//     var isi = ['a','b','c','d','e','f','g'];
//     // var cop = isi.slice(); //semua
//     var cop = isi.slice(3,4); 
//     console.log(cop)
// }
// slice2()

// PERINTAH ARRYA JOIN
// function panggilJOin(){
//     var kota = ['jakarta','meda','malang','tangerang'];
//     // var result = kota.join(',')
//     var result = kota.join(' ')
//     return result
// }
// console.log(panggilJOin())

// FUNGSI ARRAY SPLIT
// function panggilSplit(){ //merubah dari string menjadi array
//     var kalimat = "kita sedang belajar js";
//     var result = kalimat.split(" "); //bagian apa yg mau dipotong->dipotong berdasarkan spasi
//     return result
// }
// console.log(panggilSplit())

// MENGENAL PERINTAH INDEXOF UNTUK MENCARI DATA PADA AARAY
// function panggilIndexOf(){
//     var  kota  = ['jakarta','medan','malang','tangerang'];
//     return kota.indexOf("malang"); //untuk mengambil index ke berapa pada array
//     //jika hasil kurang dari 0 maka data tidak ada
// }
// console.log(panggilIndexOf())

//  PERULANGAN DENGAN FOREACH
// function panggilForEach(){
//     var data = ['a','b','c','e','p','o'];
//     data.forEach(function(item, index, array){
//         console.log(item);
//         console.log(index);
//         console.log(array);
//     })
// }

// panggilForEach();

// PERULANGAN DENGAN MAP
// function panggilPerintahMAP(){
//     var data = ['saya','ingin','belajar','bersama'];
//     data.map((item, index, array) => {
//         console.log(item,"index ke",index);
//         // console.log(index);
//         // console.log(array);
//     })
// }

// panggilPerintahMAP();

// FUNGSI ARRAY FILTER
// let people = [
//     {
//         name : "Andi",
//         gender : "male"
//     },
//     {
//         name : "siti",
//         gender : "female"
//     },
//     {
//         name : "cindy",
//         gender : "female"
//     }
// ];

// let filter = people.filter(
//     people => {
//     // return people.gender == "male";
//     return people.name == "siti";
//     }
// );




// FUNGSI ARRAY EVERY
// let product = [
//     // { name : "Apple", type : "fruit"},
//     // { name : "Monitor", type : "Computer"},
//     // { name : "Manggo", type : "fruit"},
//     { name : "Table", type : "furniture"}
// ];

// console.log(
//     product.every(product=>product.type === "furniture")
// );

// FUNGSI ARRAY SOME 
// let product = [
//     { name : "Apple", type : "fruit"},
//     { name : "Monitor", type : "Computer"},
//     { name : "Manggo", type : "fruit"},
//     { name : "Table", type : "furniture"}
// ];

// console.log(
//     product.some(product=>product.type === "fruit")
// );

// FUNGSI ARRAY EVAL

//--percobaan irwan
// setTimeout(() => {
// console.log('Jalankan 2');
// }, 5000);


// setTimeout(() => {
//     console.log('Jalankan 1');
// }, 2000);

// console.log('Jalankan 0');

// async function test2(){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve('Mantap Jalan');
//         }, 1000);
//         reject('error');
//     })
// }
// async function test(){
//     var data = await test2().catch(err => err);
//     console.log(data);
// }
// // test();

// function test3(cb){
//     setTimeout(() => {
//         cb('Mantap Jalan');
//     }, 4000);
// }

// test3((data) => {
//     console.log('data', data);
// });
//------

// FUNGSI ARRAY isFinite

// function panggilIsFinite(){
//     var a = isFinite([1,2,3,4,5]);
//     var b = isFinite(["jakarta","lampung","depok"]);
//     var c = isFinite([1,2,3,"hello","dani"]);
//     var d = isFinite(-999924.23);

//     console.log(d);
// }

// panggilIsFinite();

// FUNGSI ARRAY isNaN

// Jika terdapat data not a Number (True)
// function panggilIsNan(){
//     var a = isNaN([1,2,3,4,5]);
//     var a = isNaN([123]);

//     console.log(a);
// }

// panggilIsNan();

// FUNGSI KONVERSI MENJADI NUMBER

// function panggilNumber(){
//     var a = "9";
//     var b = 3;

//     hasil = a+b;
//     console.log(hasil);

//     hasil2 = Number(a) + b;
//     console.log(hasil2);
// }

// panggilNumber()

// PARSE int

// function paggilParseInt(){
//     var a = "13.78";
//     var b = "9 naga";
//     var c = "100.99";
   

//     hasil1 = parseInt(a);//mengkorversi tipe data menjadi int saja dan membuang angka di belakang tanda desimal
//     console.log(hasil1);
//     hasil2 = parseInt(b);
//     console.log(hasil2);
//     hasil3 = parseInt(c);
//     console.log(hasil3);

//     hasil4 = parseFloat(a); //mengkonversi type data menjadi float atau nilai nagka dengan desimal
//     console.log(hasil4);
//     hasil5 = parseFloat(b);
//     console.log(hasil5);
// }

// paggilParseInt();


// FUNGSI KONVERSI MEJADI STRING
//  function panggilString(){
//      var a = 123;
//      var b = 98.70;
//      var c = "niomic";
//      var d = true;

//      hasil1 = String(a);
//      console.log(hasil1);

//      hasil2 = String(b);
//      console.log(hasil2);

//      hasil3 = hasil1 + hasil2;
//      console.log(hasil3);

//      hasil4 = String(c);
//      console.log(hasil4);

//      hasil5 = String(d);
//      console.log(hasil5);
//  }

//  panggilString();

// FUNGSI ENCODE URI p

//menyandikan karakter khusus kecuali ,/?:@=+$#

// var uri = "my test.asp?name=stale&car=saab";
// var res = encodeURI(uri);
// console.log(res);

// FUNGSI DECODE URI p

// merupakan kebalikan dari encode rui sehingga udigunakan untuk memecahkan kode uri

// var a = "my%20test.asp?name=stale&car=saab";
// var res = decodeURI(a);
// console.log(res);

// PENGENALAN REGULER EXPRESSION

//REGEX, method atau fungsi yg sering digunakan untuk mencari atau mengganti pada sebuah data string

// function panggilRegexp(){
//     let str = "abcdefghijklmnopqrstuvwxyz";

//     return str.search(/a/);
// }

// console.log(panggilRegexp()); //output 0 => index ke-0

// PERINTAH TEST DI REGEX

//hasil bernilai bolean = true or flase

// function panggilRegex(){
//     let data = "Belajar Satu Tahun Bersama Niomic";

//     console.log(/Satu/.test(data));
//     console.log(/satu/.test(data));
//     console.log(/dua/.test(data));
// }

// panggilRegex();

// FUNGSI REGEX EXEC

//digunakan untuk mengembalikan string yang menemukan kecocokan, jika tidak maka akan mengembalikan nilai null

// function panggilRegExp(){
//     let data = "Belajar Satu Tahun Bersama Niomic";
//     let str = new RegExp("Niomic");

//     console.log(str.exec(data))
// }
// panggilRegExp();

// FUNGSI REGEX REPLACE

// penggantian data pada sebuah var string

// function panggilRegexp(){
//     let data = "Belajar satu tahun bersama niomic";
//     console.log(data.replace(/satu/,"1"));
// }

// panggilRegexp();

// FLAGS REGEX 
// function panggilRegex(value){
//     let str = "abcdefghijklmnopqrstuvwxyz";

//     console.log(str.search(/K/))
//     console.log(str.search(/K/i))
//     console.log(str.search(/k/))
//     console.log(str.search(/k/i))
// }

// panggilRegex();

// TOKKEN REGEX 
//dikelompokan berdasaran fungsinya
// var s = "ini ibu budi \n bukan bapaknya.";
// var re = /./g;
// console.log(s.match(re));

// var s2 = "sempurna..";
// var re2 = /\./g;
// console.log(s2.match(re2));

// var s = 'abcd123 efg456 !@#$%^_';

// //angka
// console.log(s.match(/\d/g));

// //selain angka
// console.log(s.match(/\D/g));

// //angka, huruf, dan underscore
// console.log(s.match(/\w/g));

// //selain angka, huruf, dan underscore
// console.log(s.match(/\W/g));

// //whitespace
// console.log(s.match(/\s/g));

//KARAKTERISTIK  SPESIFIK REGEXP
// function panggilRegexp(value){
//     // var ambilData = value.match(/Bulan/g);
//     // var ambilData = value.match(/ke/g);
//     var ambilData = value.match(/[ke]/g);
//     console.log(ambilData);
// }

// panggilRegexp("Bulan ke 1 sd ke 4");

//FLAG "G" -REGEXP == flagging global

// function panggilRegexp(){
//     let str = "abcdefghijklmnopqrstuvwxyz-abcdefghijklmnopqrstuvwxyz"

//     // console.log(str.match(/c/g))
//     console.log(str.match(/c/))
// }

// panggilRegexp()

// HURUF - ANGKA DAN SPASI REGEXP

//** */ Regular Expression atau sering disebut Regexp adalah memiliki sebuah flags atau lebih mudah dalam kita memahaminya kita sebut sebagai “TANDA”, dimana flags tersebut nantinya akan memberikan effect / hasil yang berbeda pada setiap pencarian antara yang menggunakan flags dan yang tidak.

//** */ Sekarang kita akan mencoba membuat sebuah function panggilRegexp() yang didalamnya kita akan menuliskan code RegExp didalamnya.


// function panggilRegexp(value) {
    // var ambilData = value.match(/\w/g) //dipisahkan semua kata, jika ingin mengambil 'keculi' maka gunakan huruf besar
    // var ambilData = value.match(/\d/g) //dipisahkan semua angka saja, jika ingin mengambil 'keculi' maka gunakan huruf besar
    // var ambilData = value.match(/\s/g) //dipisahkan semua spasi saja, jika ingin mengambil 'keculi' maka gunakan huruf besar
    // console.log(ambilData)
    // console.log("Banyaknya Spasi : ",ambilData.length) // menghitung jumlah
// }

// panggilRegexp("Bulan ke 1 sd ke 4");

// OPERATOR MODULUS

// function panggilModulus(){
//     var data1 = 5;
//     var data2 = 2;
//     return data1 % data2
// }

// console.log(panggilModulus())

// BILANGAN GENAP

// function panggilBilanganGenap(){
//     var bilanganGenap = []
//     for (var i = 1; i < 10; i++){ 
//         if(i%2 === 0){
//             bilanganGenap.push(i)
//         }
//     }
//     return bilanganGenap
// }

// console.log(panggilBilanganGenap())

//BILANGAN GANIL

// function panggilBilanganGanjil(){
//     var bilanganGanjil = []
//     for (var i = 1; i < 30; i++){ 
//         if(i%2 !== 0){
//             bilanganGanjil.push(i)
//         }
//     }
//     return bilanganGanjil
// }

// console.log(panggilBilanganGanjil())

//BILANGAN KELIPATAN

// function panggilBilanganKelipatan(){
//     var data = []
//     for (var i = 1; i < 50; i++){
//         if(i%5 === 0){
//             data.push(i)
//         }
//     }
//     return data;
// }

// console.log(panggilBilanganKelipatan())

//PERINTAH FOREACH

// function panggilForEach(){
//     var data = ['a','b','c','e','p','o'];

//     data.forEach(function (item,index, array) {
//         console.log(item);
//         console.log(index);
//         console.log(array);
//     })
// }

// panggilForEach()

//PERULANGAN MENGGUNAKAN PERINTAH MAP

// function panggilPerintahMap(){
//     var dataKota = ['Jakarta','Balikpapan','Medan'];
//     dataKota.map((item, index, array) => {
//         console.log(item);
//         console.log(index);
//         console.log(array);
//     });
// }

// panggilPerintahMap();
