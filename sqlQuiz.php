<?php
$servername = "your_server_name";
$username = "your_username";
$password = "your_password";
$dbname = "your_database_name";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
?>

<?php
$quiz_id = 1; // Replace with the desired quiz_id
$sql = "SELECT vraag_id, vraag_tekst FROM vragen_tabel WHERE quiz_id = $quiz_id LIMIT 1";
$result = $conn->query($sql);

if ($result === false) {
    // Handle query error
    echo "Query error: " . $conn->error;
} elseif ($result->num_rows > 0) {
    $row = $result->fetch_assoc();
    $vraag_id = $row["vraag_id"];
    $vraag_tekst = $row["vraag_tekst"];
} else {
    // Handle no question found
    echo "No question found for quiz_id: $quiz_id";
}
?>

