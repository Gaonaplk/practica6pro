function problema1() {
    const input = document.getElementById("valores1").value.split(",").map(Number);
    if (input.length !== 50) return alert("Debes ingresar exactamente 50 números.");
    const promedio = input.reduce((a, b) => a + b, 0) / 50;
    const mayores = input.filter(x => x > promedio);
    document.getElementById("resultado1").textContent = `Promedio: ${promedio.toFixed(2)}
  Mayores al promedio (${mayores.length}): ${mayores.join(", ")}`;
  }
  
  function problema2() {
    const a = document.getElementById("vectorA2").value.split(",").map(Number);
    const b = document.getElementById("vectorB2").value.split(",").map(Number);
    if (a.length !== 45 || b.length !== 45) return alert("Ambos vectores deben tener 45 elementos.");
    const c = a.map((val, i) => val + b[i]);
    document.getElementById("resultado2").textContent = `Vector resultado: ${c.join(", ")}`;
  }
  
  function problema3() {
    const datos = document.getElementById("valores3").value.split(",").map(Number);
    if (datos.length !== 20) return alert("Debes ingresar 20 números.");
    const mayor = Math.max(...datos);
    const pos = datos.indexOf(mayor);
    document.getElementById("resultado3").textContent = `Mayor: ${mayor} en posición: ${pos}`;
  }
  
  function problema5() {
    const datos = document.getElementById("valores5").value.split(",").map(Number);
    if (datos.length !== 300) return alert("Debes ingresar 300 números.");
    let ceros = 0, positivos = 0, negativos = 0, sumaPos = 0, sumaNeg = 0;
    datos.forEach(num => {
      if (num === 0) ceros++;
      else if (num > 0) { positivos++; sumaPos += num; }
      else { negativos++; sumaNeg += num; }
    });
    document.getElementById("resultado5").textContent = `Ceros: ${ceros}
  Positivos: ${positivos} (Suma: ${sumaPos})
  Negativos: ${negativos} (Suma: ${sumaNeg})`;
  }
  
  function problema6() {
    const a = document.getElementById("vectorA6").value.split(",").map(Number);
    const b = document.getElementById("vectorB6").value.split(",").map(Number);
    if (a.length !== 20 || b.length !== 20) return alert("Ambos vectores deben tener 20 elementos.");
    const c = a.map((val, i) => val * b[19 - i]);
    document.getElementById("resultado6").textContent = `Vector resultado: ${c.join(", ")}`;
  }
  