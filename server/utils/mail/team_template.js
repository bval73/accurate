
const team = (data) => {
  return `
    <!DOCTYPE html>
<html style="margin: 0; padding: 0;">
    <head>
        <title>Thank you ${data.fname ? data.fname : data.owner.username} ' ' ${data.lname ? data.lname : ''}!</title>
    </head>
        <body style="margin: 0; padding: 0;">
            <table class="table" cellpadding="0" cellspacing="0" style=" empty-cells: hide; margin: 0 auto; padding: 0; width: 600px;">
                <tr>
                    <td style=" margin: 0 auto;">
                    A message from ${data.fname ? data.fname : data.owner.username} ' ' ${data.lname ? data.lname : ''} from email ${data.email ? data.email : data.owner.email}
                    <p>
                        ${data.comment}
                    </p>
                    <p>
                        street: ${data.street ? data.street : ''} </br >
                        city: ${data.city ? data.city : ''}</br >
                        zip: ${data.zip ? data.zip : ''} </br >
                        phone: ${data.phone ? data.phone : ''} 
                    </p>

                    </td>
                </tr>
            </table>
        </body>
  </html>
    `;
};

module.exports = { team };