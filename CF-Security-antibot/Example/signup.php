<?php
// ⚠️ Not secure. For demo only.
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $username = trim($_POST["username"]);
    $password = trim($_POST["password"]);

    // write to "database.txt"
    $line = $username . ":" . password_hash($password, PASSWORD_DEFAULT) . PHP_EOL;
    file_put_contents("database.txt", $line, FILE_APPEND | LOCK_EX);

    echo "✅ User '$username' registered successfully (stored in database.txt)";
} else {
    echo "Method not allowed";
}
?>
