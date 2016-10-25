(function calculateEff() {
// Get DOM elements
  const n = document.getElementById("n");
  const s = document.getElementById("s");
  const h = document.getElementById("h");
  const rp = document.getElementById("rp");
  const q = document.getElementById("q");
  const pc_output = document.getElementById("pc-output");
  const u_output = document.getElementById("u-output");
  const a_output = document.getElementById("a-output");
  const btnCalculate = document.getElementById("btn-calculate-eff");
  const mtbf = document.getElementById("mtbf");
  const mttr = document.getElementById("mttr");
  btnCalculate.addEventListener('click', e => {if(e != null) { runCalculate() } });

function runCalculate() {
  const n_value = n.value;
  const s_value = s.value;
  const h_value = h.value;
  const rp_value = rp.value;
  const q_value = q.value;
  const mtbf_value = mtbf.value;
  const mttr_value = mttr.value;
  const pc_value = n_value*s_value*h_value*rp_value;
  const u_value = (q_value/pc_value)*100;
  const a_value = (mtbf_value-mttr_value)/mtbf_value;
  pc_output.innerHTML = pc_value;
  u_output.innerHTML = u_value;
  a_output.innerHTML = a_value;
 }

}());
