function formatCPF() {
  const cpfInput = document.getElementById("cpf");

  cpfInput.value = cpfInput.value
    .replace(/[^\d]/g, "")
    .replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
}

function formatCNS() {
  const susInput = document.getElementById("sus");

  susInput.value = susInput.value.replace(/[^\d]/g, "");
}

document.addEventListener("DOMContentLoaded", function () {
  var datepicker_pt_br = {
    today: "Hoje",
    clear: "Limpar",
    done: "Ok",
    nextMonth: "Próximo mês",
    previousMonth: "Mês anterior",
    weekdaysAbbrev: ["D", "S", "T", "Q", "Q", "S", "S"],
    weekdaysShort: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"],
    weekdays: [
      "Domingo",
      "Segunda-Feira",
      "Terça-Feira",
      "Quarta-Feira",
      "Quinta-Feira",
      "Sexta-Feira",
      "Sábado",
    ],
    monthsShort: [
      "Jan",
      "Fev",
      "Mar",
      "Abr",
      "Mai",
      "Jun",
      "Jul",
      "Ago",
      "Set",
      "Out",
      "Nov",
      "Dez",
    ],
    months: [
      "Janeiro",
      "Fevereiro",
      "Março",
      "Abril",
      "Maio",
      "Junho",
      "Julho",
      "Agosto",
      "Setembro",
      "Outubro",
      "Novembro",
      "Dezembro",
    ],
  };
  var options = {
    container: "body",
    showDaysInNextAndPreviousMonths: true,
    i18n: datepicker_pt_br,
    //outras configurações
  };

  var elems = document.querySelectorAll(".datepicker");
  M.Datepicker.init(elems, options);

  var selects = document.querySelectorAll("select");
  M.FormSelect.init(selects);
});
