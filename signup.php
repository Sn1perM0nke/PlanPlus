<?php
$servername = "localhost";
$username = "wztstepl_Sn1perM0nke";
$password = "Ili47494749";
$dbname = "wztstepl_account";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $first_name = mysqli_real_escape_string($conn, $_POST['first-name']);
    $last_name = mysqli_real_escape_string($conn, $_POST['last-name']);
    $age = mysqli_real_escape_string($conn, $_POST['age']);
    $username = mysqli_real_escape_string($conn, $_POST['username']);
    $password = mysqli_real_escape_string($conn, $_POST['password']);

    // Check if the username already exists
    $check_query = "SELECT * FROM users WHERE username='$username'";
    $result = $conn->query($check_query);

    if ($result->num_rows > 0) {
        echo "نام کاربری توسط فرد دیگری استفاده شده است";
    } else {
        // Hash the password for security (you should use a more secure hashing method)
        $hashed_password = password_hash($password, PASSWORD_DEFAULT);

        $sql = "INSERT INTO users (first_name, last_name, age, username, password)
        VALUES ('$first_name', '$last_name', '$age', '$username', '$hashed_password')";

        if ($conn->query($sql) === TRUE) {
            echo "Record created successfully";
        } else {
            if ($conn->errno == 1062) {
                // Error number 1062 indicates a duplicate entry (in this case, duplicate username)
                echo "نام کاربری توسط فرد دیگری استفاده شده است";
            } else {
                echo "Error: " . $sql . "<br>" . $conn->error;
            }
        }
    }
}

$conn->close();
?>