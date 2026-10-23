async function gerarPDF() {

    const { jsPDF } = window.jspdf;

    const doc = new jsPDF();

    const paciente = document.getElementById("nome").value;
    const diagnostico = document.getElementById("diagnostico").value;
    const dataAlta = document.getElementById("dataAlta").value;
    const medicacao = document.getElementById("medicacao").value;
    const observacoes = document.getElementById("observacoes").value;


    // Carregar logo do hospital
    const logo = new Image();

    logo.src = "img/logo roxo.jpg";


    logo.onload = function () {


        // =========================
        // LOGO
        // =========================

        doc.addImage(
            logo,
            "JPEG",
            15,
            10,
            35,
            35
        );


        // =========================
        // CABEÇALHO
        // =========================

        doc.setFont("helvetica", "bold");

        doc.setFontSize(20);
        doc.text(
            "HOSPITAL PRO",
            60,
            25
        );


        doc.setFontSize(15);

        doc.text(
            "RELATÓRIO DE ALTA MÉDICA",
            60,
            35
        );


        doc.line(
            15,
            50,
            195,
            50
        );


        // =========================
        // INFORMAÇÕES
        // =========================


        doc.setFont("helvetica", "normal");

        doc.setFontSize(12);


        doc.text(
            "Paciente: " + paciente,
            20,
            70
        );


        doc.text(
            "Data da Alta: " + dataAlta,
            20,
            80
        );



        doc.text(
            "Diagnóstico:",
            20,
            100
        );


        doc.text(
            doc.splitTextToSize(
                diagnostico,
                165
            ),
            20,
            108
        );



        doc.text(
            "Medicação:",
            20,
            140
        );


        doc.text(
            doc.splitTextToSize(
                medicacao,
                165
            ),
            20,
            148
        );



        doc.text(
            "Observações:",
            20,
            180
        );


        doc.text(
            doc.splitTextToSize(
                observacoes,
                165
            ),
            20,
            188
        );



        // =========================
        // ASSINATURA
        // =========================


        doc.line(
            60,
            250,
            150,
            250
        );


        doc.text(
            "Assinatura do Médico",
            80,
            260
        );



        // =========================
        // RODAPÉ
        // =========================


        doc.setFontSize(10);

        doc.text(
            "Hospital Pro - Sistema Hospitalar",
            20,
            285
        );



        // Salvar PDF

        doc.save(
            "Alta_" + paciente + ".pdf"
        );

    };


    logo.onerror = function () {

        alert(
            "Erro ao carregar a logo. Verifique se o arquivo está em img/logo roxo.jpg"
        );

    };

}