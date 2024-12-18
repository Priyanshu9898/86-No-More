function generateEmailForRating(
  restaurantName,
  userName,
  dishName,
  rating,
  comments,
  companyName
) {
  return `
  <!DOCTYPE html>
  <html>
    <head>
      <meta charset="UTF-8" />
      <title>New Rating Received</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          background-color: #f4f4f4;
          color: #333333;
          padding: 20px;
        }
        .email-container {
          background-color: #ffffff;
          padding: 30px;
          border-radius: 8px;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
        .header {
          border-bottom: 2px solid #28a745;
          padding-bottom: 10px;
          margin-bottom: 20px;
        }
        .header h2 {
          color: #28a745;
        }
        .content {
          line-height: 1.6;
        }
        .footer {
          margin-top: 30px;
          font-size: 0.9em;
          color: #777777;
        }
      </style>
    </head>
    <body>
      <div class="email-container">
        <div class="header">
          <h2>New Rating Received</h2>
        </div>
        <div class="content">
          <p>Dear <strong>${restaurantName}</strong>,</p>
          <p>
            User <strong>${userName}</strong> has rated your dish
            <strong>${dishName}</strong> with <strong>${rating} stars</strong>.
          </p>
          ${comments ? `<p>Comments: "${comments}"</p>` : ""}
          <p>Thank you for providing excellent service!</p>
        </div>
        <div class="footer">
          <p>Best regards,<br />${companyName}</p>
        </div>
      </div>
    </body>
  </html>
    `;
}
