import { printToFileAsync } from 'expo-print';
import { shareAsync } from 'expo-sharing';
import { converNumberToRupee } from '@/constants/commonMenthod';
import { ReportDataProps } from '@/interface/commonInterface';
import moment from 'moment';

interface PDFProps {
    templeDetails?: {
        templeName?: string;
        templeAddress?: string;
        templeImage?: string;
    }
    reportType: string;

   report:ReportDataProps| null ,
   reportHeaders:string[],

}

export const generatePDF = async ({templeDetails,reportType,report,reportHeaders}:PDFProps) => {


    const htmlTemplate = `
            <!DOCTYPE html>
            <html lang="ta">
            <head>
            <meta charset="UTF-8" />
            <title>PDF Template</title>
            <style>
                body {
                font-family: 'Arial', sans-serif;
                margin: 40px;
                font-size: 14px;
                color: #333;
                }

                header {
                display: flex;
                align-items: center;
                justify-content: center;
                margin-bottom: 30px;
                }

                .logo {
                width: 80px;
                height: 80px;
                margin-right: 20px;
                }

                .header-text {
                text-align: center;
                flex: 1;
                }

                h1 {
                font-size: 24px;
                margin: 0;
                }

                .section {
                margin-bottom: 20px;
                }

                .section h2 {
                font-size: 18px;
                margin-bottom: 10px;
                border-bottom: 1px solid #ccc;
                padding-bottom: 5px;
                }

                table {
                width: 100%;
                border-collapse: collapse;
                margin-top: 10px;
                }

                table, th, td {
                border: 1px solid #ccc;
                }

                th, td {
                padding: 8px;
                text-align: left;
                }

                footer {
                position: fixed;
                bottom: 30px;
                width: 100%;
                text-align: center;
                font-size: 12px;
                color: #aaa;
                }

                @page {
                size: A4;
                margin: 40px;
                }
            </style>
            </head>
            <body>

            <header>
                <img src=${templeDetails?.templeImage} alt="Temple Logo" class="logo" />
                <div class="header-text">
                <h1>${templeDetails?.templeName}</h1>
                <p><strong>${templeDetails?.templeAddress}</strong></p>
                </div>
            </header>

            <div class="section">
                <h2>${reportType}</h2>
            </div>

            <div class="section">
                <table>
                <thead>
                    <tr>

                    ${
                        reportHeaders.map(header => `<th>${header}</th>`).join('')
                    }

                   
                    </tr>
                </thead>
                <tbody>
                    ${report?.list.map((item,index) => `
                        <tr>
                            <td>${index+1}</td>
                            <td>${moment(item.createdDate).format('DD-MM-YYYY')}</td>
                            <td>${item.personName}</td>
                            <td>${'-'}</td>
                            <td>${converNumberToRupee(item.amount)}</td>
                            <td>${item.paymentType}</td>
                            <td>${item.comments || ''}</td>
                        </tr>
                    `).join('')}
                    
                </tbody>
                </table>
            </div>

            <div class="section">
                <h2>Summary</h2>
                <p><strong>Grand Total:</strong>${report?.totalAmount ? converNumberToRupee(report?.totalAmount) : converNumberToRupee(0)}</p>
            </div>

            <footer>
                Temple Billing © 2025 - Generated on 15 July 2025
            </footer>
            </body>
            </html>
`;


    const { uri } = await printToFileAsync({ html: htmlTemplate, base64: false });
    await shareAsync(uri)
    console.log('PDF generated at:', uri);
};
