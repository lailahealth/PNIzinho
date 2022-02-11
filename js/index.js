// const config = require("./config.js");

const config = {
  "37bc98b7-178c-46c2-be0d-f06d8eacf90e": "projetolaila@gmail.com",
  "a255fa5a-5c59-4aec-8254-ed0dfc22a490": "semus.penalva@hotmail.com",
};

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

  var datePickerOptions = {
    container: "body",
    showDaysInNextAndPreviousMonths: true,
    i18n: datepicker_pt_br,
    //outras configurações
  };

  var datePickers = document.querySelectorAll(".datepicker");
  M.Datepicker.init(datePickers, datePickerOptions);

  var selects = document.querySelectorAll("select");
  M.FormSelect.init(selects);

  const params = new URLSearchParams(document.location.search.substring(1));
  const uuid = params.get("id");

  if (!uuid) {
    window.location.href = "https://lailahealth.github.io/PNIzinho/401.html";

    return;
  }

  const emailToSend = config[uuid];

  if (!emailToSend) {
    window.location.href = "https://lailahealth.github.io/PNIzinho/401.html";

    return;
  }

  const $h5Tag = document.getElementsByTagName("h5")[0];

  $h5Tag.append(`Email: ${emailToSend}`);

  const $form = document.getElementsByTagName("form")[0];

  $form.action = `https://formsubmit.co/${emailToSend}`;
});
