const thankyou = (name) => {
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
                        <p>
                            Thank you ${name} for your inquiry, we will respond within 24 hours if the comment requires one. </br> </br>

                            The Accurate Team
                        </p>
                    </td>
                </tr>
            </table>
        </body>
  </html>
    `;
};

module.exports = { thankyou };