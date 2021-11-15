<!DOCTYPE html>
<!--A subpage for DnD beginner's guide, created by Josip Bailey, last edited 151121-->
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>DND: A beginner's guide</title>
</head>

     <!--content of website-->
<body style="background-color: #44bcd8;">
    <header>
        <!--title header-->
        <head><title>DND: A Beginner's Guide</title> <link rel="stylesheet" type="text/css" href="G2TWebpageStyle.css"> </head>
        <div class="top">
            <h1>Dungeons &amp; Dragons: A Beginner's Guide</h1>
            <img src="https://elancolibrary.lancasterlibraries.org/wp-content/uploads/sites/7/2017/12/dnd1.png" alt="DND" width="600" height="200"> 
        </div>
    </header>
        <hr/>

    <!--middle section with form end result-->
    <main>
        <div class="top">
        <b><p style="font-size: x-large;">Warlock's Subscription</p></b>
        </div>

        <div class="main">
        <?php 
            //connect to the server
            $host = "localhost";
            $dbUser = "root";
            $dbPasscode = "";
            $dbName = "g2twebpage";
            $sqlConnection = mysqli_connect($host, $dbUser, $dbPasscode);
          
            //check SQL connection
            if (!$sqlConnection){
            die("Connection Failed: " .mysqli_connect_error());
            }
            echo "<p style='position:fixed;bottom:3em;right:25px;'>Connected Successfully to SQL<br/></p>";

            //commented out as it is no longer needed once running to avoid error messages
            /*
            //create new database
            $sqlCreate = "CREATE DATABASE g2twebpage";
            if(mysqli_query($sqlConnection, $sqlCreate)){
                echo "<p style='position:fixed;bottom:2em;right:25px;'>Database mailinglist created successfully<br/></p>";
            }else{
                echo"<p style='position:fixed;bottom:2em;right:25px;'>ERROR: Could not execute $sqlCreate. " . mysqli_error($sqlConnection) . "<br/></p>";
            }*/

            //reconnect to sql, specifying the new database
            mysqli_close($sqlConnection);
            $dbConnection = mysqli_connect($host, $dbUser, $dbPasscode, $dbName);

            //commented out as it is no longer needed once running to avoid error messages
            /*//create new table in database
            $sqlTable = "CREATE TABLE warlocksubs(
            subname VARCHAR(64) NOT NULL,
            submail VARCHAR(64) NOT NULL PRIMARY KEY,
            sublevel VARCHAR(20) NOT NULL 
            )";

            if (mysqli_query($dbConnection, $sqlTable)){
                echo "<p style='position:fixed;bottom:1em;right:25px;'>Table warlocksubs created successfully<br/></p>";
            }
            else{
                echo "<p style='position:fixed;bottom:1em;right:25px;'>Error creating table: " . mysqli_error($dbConnection) . "<br/></p>";
            }*/

            //check for data in the post, get arrays and then attempt to adding the data to the database
            if (isset($_POST['subname']) && ($_POST['submail']) && ($_POST['sublevel'])){
                //Insert the new subscriber to the database
                $sqlInsert = "INSERT INTO warlocksubs (subname, submail, sublevel) VALUES (?, ?, ?)";
                $stmt = mysqli_prepare($dbConnection, $sqlInsert);

                if($stmt){
                    mysqli_stmt_bind_param($stmt, "sss", $subname, $submail, $sublevel);
                }
                else{
                    echo "<p style='position:fixed;bottom:0;right:25px;'>ERROR: Could not prpare query: $sqlInsert. " . mysqli_error($dbConnection) . "<br/></p>";
                }
                $subname = $_POST['subname'];
                $submail = $_POST['submail'];
                $sublevel = $_POST['sublevel'];
                mysqli_stmt_execute($stmt);
                mysqli_stmt_close($stmt);

                //Display results from the database
                echo "Welcome to the Warlock List with these other subscribers: <br/>";
                $sqlSelect = "SELECT subname, sublevel FROM warlocksubs";
                
                $result = mysqli_query($dbConnection, $sqlSelect);
                if(mysqli_num_rows($result)>0){
                    while($row = mysqli_fetch_assoc($result)){
                        echo $row['subname']." ".$row['sublevel']."<br/>";
                    }
                }
                else{
                    echo "0 results";
                }
            }
            mysqli_close($dbConnection);
        ?>
        Thank-you young warlock for joining patronage, be ready for helpful tips soon!
        </div>

    </main>

    <footer>
        <div class="tableC">
            <table>
                
                <!--Set table of contents as hyperlinks to hidden pages-->
                <caption><strong>Table of Contents</strong></caption>
                    
                    <tr><td><a href="G2TWebpageHome.html">Home</a></td></tr><br/>
                    <tr><td><a href="G2TWebpageRace.html">Race</a></td></tr><br/>
                    <tr><td><a href="G2TWebpageClass.html">Class</a></td></tr>
                    <tr><td><a href="G2TWebpageStat.html">Stats</a></td></tr>
                    <tr><td><a href="G2TWebpageBackground.html">Background</a></td></tr>
                    <tr><td><a href="G2TWebpageDMNOTES.html">DM Notes</a></td></tr>
                    <tr><td><a href="G2TWebpageVideos.html">Video Help</a></td></tr>
                    <tr><td><a href="G2TWebpageDice.html">Die Roller</a></td></tr>
                    <tr><td><a href="http://localhost/DnDWebpage/G2TWebpageForum.php">warlock Subs</a></td></tr>
        </div>
    </footer>
</body>
</html>