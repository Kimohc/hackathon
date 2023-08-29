<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Colorful Quiz</title>
    <link rel="stylesheet" href="CSS/overig.css">
</head>
<body>
   <div class="quiz-container">
    <h1>Quiz: How well do you know about something?</h1>
    <form action="quiz_result.php" method="post">
        <p>Question <?php echo $vraag_id; ?>: <?php echo $vraag_tekst; ?></p>
        <label><input type="radio" name="q1" value="a"> a) Option A</label>
        <label><input type="radio" name="q1" value="b"> b) Option B</label>
        <label><input type="radio" name="q1" value="c"> c) Option C</label>
        <label><input type="radio" name="q1" value="d"> d) Option D</label>
    </form>


            <br>

            <p>Question 2: Which planet is known as the Red Planet?</p>
            <label><input type="radio" name="q2" value="a"> a) Earth</label>
            <label><input type="radio" name="q2" value="b"> b) Mars</label>
            <label><input type="radio" name="q2" value="c"> c) Venus</label>
            <label><input type="radio" name="q2" value="d"> d) Jupiter</label>

             <br>

            <p>Question 3: Which planet is known as the Red Planet?</p>
            <label><input type="radio" name="q3" value="a"> a) Earth</label>
            <label><input type="radio" name="q3" value="b"> b) Mars</label>
            <label><input type="radio" name="q3" value="c"> c) Venus</label>
            <label><input type="radio" name="q3" value="d"> d) Jupiter</label>

             <br>

            <p>Question 4: Which planet is known as the Red Planet?</p>
            <label><input type="radio" name="q4" value="a"> a) Earth</label>
            <label><input type="radio" name="q4" value="b"> b) Mars</label>
            <label><input type="radio" name="q4" value="c"> c) Venus</label>
            <label><input type="radio" name="q4" value="d"> d) Jupiter</label>

             <br>

            <p>Question 5: Which planet is known as the Red Planet?</p>
            <label><input type="radio" name="q5" value="a"> a) Earth</label>
            <label><input type="radio" name="q5" value="b"> b) Mars</label>
            <label><input type="radio" name="q5" value="c"> c) Venus</label>
            <label><input type="radio" name="q5" value="d"> d) Jupiter</label>

             <br>

            <p>Question 6: Which planet is known as the Red Planet?</p>
            <label><input type="radio" name="q6" value="a"> a) Earth</label>
            <label><input type="radio" name="q6" value="b"> b) Mars</label>
            <label><input type="radio" name="q6" value="c"> c) Venus</label>
            <label><input type="radio" name="q6" value="d"> d) Jupiter</label>

             <br>

            <p>Question 7: Which planet is known as the Red Planet?</p>
            <label><input type="radio" name="q7" value="a"> a) Earth</label>
            <label><input type="radio" name="q7" value="b"> b) Mars</label>
            <label><input type="radio" name="q7" value="c"> c) Venus</label>
            <label><input type="radio" name="q7" value="d"> d) Jupiter</label>

             <br>

            <p>Question 8: Which planet is known as the Red Planet?</p>
            <label><input type="radio" name="q8" value="a"> a) Earth</label>
            <label><input type="radio" name="q8" value="b"> b) Mars</label>
            <label><input type="radio" name="q8" value="c"> c) Venus</label>
            <label><input type="radio" name="q8" value="d"> d) Jupiter</label>

             <br>

            <p>Question 9: Which planet is known as the Red Planet?</p>
            <label><input type="radio" name="q9" value="a"> a) Earth</label>
            <label><input type="radio" name="q9" value="b"> b) Mars</label>
            <label><input type="radio" name="q9" value="c"> c) Venus</label>
            <label><input type="radio" name="q9" value="d"> d) Jupiter</label>

             <br>

            <p>Question 10: Which planet is known as the Red Planet?</p>
            <label><input type="radio" name="q10" value="a"> a) Earth</label>
            <label><input type="radio" name="q10" value="b"> b) Mars</label>
            <label><input type="radio" name="q10" value="c"> c) Venus</label>
            <label><input type="radio" name="q10" value="d"> d) Jupiter</label>

            <input type="submit" value="Submit">
        </form>
    </div>
</body>
</html>
