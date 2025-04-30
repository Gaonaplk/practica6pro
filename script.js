/* ======== UTILIDAD ======== */
function randomArray(n, min = 0, max = 100) {
  return Array.from({ length: n }, () =>
    Math.floor(Math.random() * (max - min + 1)) + min
  );
}
function setValue(id, arr) {
  document.getElementById(id).value = arr.join(",");
}
/* ======== AUTORRELLENO ======== */
function autofill1() { setValue("valores1", randomArray(50)); }
function autofill2A(){ setValue("vectorA2", randomArray(45)); }
function autofill2B(){ setValue("vectorB2", randomArray(45)); }
function autofill3() { setValue("valores3", randomArray(20)); }
function autofill5() { setValue("valores5", randomArray(300,-100,100)); }
function autofill6A(){ setValue("vectorA6", randomArray(20,1,10)); }
function autofill6B(){ setValue("vectorB6", randomArray(20,1,10)); }

/* ======== PROBLEMAS ======== */
function problema1(){
  const v=document.getElementById("valores1").value.split(",").map(Number);
  if(v.length!==50) return alert("Se requieren 50 números");
  const prom=v.reduce((a,b)=>a+b)/50, mayores=v.filter(x=>x>prom);
  document.getElementById("resultado1").textContent=`Promedio: ${prom.toFixed(2)}
Mayores (${mayores.length}): ${mayores.join(", ")}`;
}
function problema2(){
  const A=document.getElementById("vectorA2").value.split(",").map(Number);
  const B=document.getElementById("vectorB2").value.split(",").map(Number);
  if(A.length!==45||B.length!==45) return alert("Ambos vectores deben tener 45 elementos");
  const C=A.map((v,i)=>v+B[i]);
  document.getElementById("resultado2").textContent=`C = ${C.join(", ")}`;
}
function problema3(){
  const v=document.getElementById("valores3").value.split(",").map(Number);
  if(v.length!==20) return alert("Debes ingresar 20 números");
  const mayor=Math.max(...v), pos=v.indexOf(mayor);
  document.getElementById("resultado3").textContent=`Mayor: ${mayor} en posición ${pos}`;
}
function problema5(){
  const v=document.getElementById("valores5").value.split(",").map(Number);
  if(v.length!==300) return alert("Se requieren 300 números");
  let c=0,p=0,n=0,sPos=0,sNeg=0;
  v.forEach(x=>{
    if(x===0) c++; else if(x>0){p++;sPos+=x;} else {n++;sNeg+=x;}
  });
  document.getElementById("resultado5").textContent=`Ceros: ${c}
Positivos: ${p} (Suma: ${sPos})
Negativos: ${n} (Suma: ${sNeg})`;
}
function problema6(){
  const A=document.getElementById("vectorA6").value.split(",").map(Number);
  const B=document.getElementById("vectorB6").value.split(",").map(Number);
  if(A.length!==20||B.length!==20) return alert("Ambos vectores deben tener 20 elementos");
  const C=A.map((v,i)=>v*B[19-i]);
  document.getElementById("resultado6").textContent=`C = ${C.join(", ")}`;
}

