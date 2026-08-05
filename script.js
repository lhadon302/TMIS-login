document.getElementById("loginForm").addEventListener("submit", function(event){

    event.preventDefault();

    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    if(email === "officer@tims.gov.au" && password === "TIMS123"){

        document.body.innerHTML = `
        <div style="font-family:Arial;padding:40px;background:#f2f6f9;min-height:100vh;">

            <h1 style="color:#004b8d;">
                Traffic Incident Management System
            </h1>

            <h2>Officer Dashboard</h2>

            <hr>

            <h3>Welcome Demo Officer</h3>

            <p><strong>Active Incidents:</strong> 489</p>

            <p><strong>Pending Reports:</strong> 6</p>

            <p><strong>Approved Today:</strong> 12</p>

            <table border="1" cellpadding="10" cellspacing="0">

                <tr>
                    <th>Incident</th>
                    <th>Location</th>
                    <th>Status</th>
                </tr>

                <tr>
                    <td>Vehicle Crash</td>
                    <td>Pacific Motorway</td>
                    <td>Active</td>
                </tr>

                <tr>
                    <td>Road Hazard</td>
                    <td>Logan Road</td>
                    <td>Approved</td>
                </tr>

            </table>

        </div>
        `;

    }else{

        alert("Incorrect Email or Password");

    }

});
