
const team = (name, comment, from) => {
  return `
    <!DOCTYPE html>
<html style="margin: 0; padding: 0;">
    <head>
        <title>Thank you ${name}!</title>
    </head>
        <body style="margin: 0; padding: 0;">
            <table class="table" cellpadding="0" cellspacing="0" style=" empty-cells: hide; margin: 0 auto; padding: 0; width: 600px;">
                <tr>
                    <td style=" margin: 0 auto;">
                    A message from ${name} from email ${from}
                    <p>
                        ${comment}
                    </p>
                    </td>
                </tr>
            </table>
        </body>
  </html>
    `;
};

module.exports = { team };