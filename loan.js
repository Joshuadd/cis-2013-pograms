$ = (id) => document.getElementById(id);

calculate = () => {
  $("total_cost").value = $("monthly_payment").value * $("loan_length").value;
};
