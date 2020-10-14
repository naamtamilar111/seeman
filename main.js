const pagamen = document.getElementById('pagamen');
const vakkalaren = document.getElementById('vakkalaren');
const kudumba= document.getElementById('kudumba');
const vakalarpeyar = document.getElementById('vakkalarpeyar');
const vayathu = document.getElementById('vayathu');
const palinam = document.getElementById('palinam');
const kathavuen= document.getElementById('kathavuen');
const mugavari= document.getElementById('mugavari');
const addBtn = document.getElementById('addBtn');

const database = firebase.database();
const rootRef = database.ref('Webmembers');

addBtn.addEventListener('click',(e)=>{
    e.preventDefault();
    rootRef.child(vakkalaren.value).set({
        பாகம்_எண்:pagamen.value,
        வாக்காளர்_எண்:vakkalaren.value,
        குடும்ப_உறுப்பினர்_எண்ணிக்கை:kudumba.value,
        வாக்காளர்_பெயர் :vakalarpeyar.value,
        வாக்காளர்_வயது:vayathu.value,
        வாக்காளர்_பாலினம்:palinam.value,
        கதவு_எண்:kathavuen.value,
        வாக்காளர்_முகவரி:mugavari.value
    });
    alert('சமர்பிக்கப்பட்டது ');
document.getElementById("form").reset();

});
