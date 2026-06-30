          return True
        else:
            print(f"❌ Wrong! The correct answer was {q_data['answer']}")
            return False
def display_results(self):
        """Show final results"""
        print("\n" + "=" * 40)
        print("📊 QUIZ COMPLETED!")
        print("=" * 40)
        print(f"✅ Correct Answers: {self.score}")
print(f"❌ Wrong Answers: {self.total_questions - self.score}")
        percentage = (self.score / self.total_questions) * 100
        print(f"📈 Score: {percentage:.1f}%")
        
if percentage >= 90:
            print("🏆 Grade: A+ (Excellent!)")
        elif percentage >= 80:
            print("🌟 Grade: A (Great job!)")time.sleep(1)
        elif percentage >= 70:
            print("👍 Grade: B (Good work!)")
        elif percentage >= 60:
            print("📖 Grade: C (Keep practicing!)")
        else:
            print("💪 Grade: D (Better luck next time!)")
                for i, question in enumerate(self.questions, 1):  def play_again(self):
        """Ask if user wants to play again"""
        while True:
            choice = input("\nPlay again? (yes/no): ").lower().strip()
                self.ask_question(question, i)
                time.sleep(0.5)
              while playing:
            self.score = 0
            self.shuffle_questions()
            self.display_welcome()
    def run(self):
        """Main game loop"""
        playing = True
    def ask_question(self, q_data, q_num):print("🎯 WELCOME TO THE QUIZ GAME!")
        print("=" * 40)def main():esults()
                if choice in ['yes', 'y']:
                return True
            elif choice in ['no', 'n']:
                return False
            print("⚠️  Please enter 'yes' or 'no'.")
            # Ask to play again
            playing = self.play_again()
        
    game = QuizGame()
    game.run()

if __name__ == "__main__":
    main()
        print(f"Total Questions: {self.total_questions}")
        print("Type A, B, C, or D to answer")
        print("=" * 40) {   { {]
        self.score = 0
        self.total_questions = len(self.questions)
    
    def shuffle_questions(self):
                "question": "What is the chemical symbol for water?",
                "options": ["A. H2O", "B. CO2", "C. NaCl", "D. HCl"],
                "answer": "A"
            }
                "question": "Who wrote 'Romeo and Juliet'?",
                "options": ["A. Charles Dickens", "B. William Shakespeare", 
                           "C. Mark Twain", "D. Jane Austen"],
                "answer": "B"
            },
                "question": "What is the largest ocean on Earth?",
                "options": ["A. Atlantic", "B. Indian", "C. Arctic", "D. Pacific"],
                "answer": "D"
            },
                "question": "Which planet is known as the Red Planet?",
                "options": ["A. Venus", "B. Jupiter", "C. Mars", "D. Saturn"],
                "answer": "C"
            },   {
                "question": "What is the capital of France?",
                "options": ["A. London", "B. Paris", "C. Berlin", "D. Madrid"],
                "answer": "B"
            },import random
import time
self.questions = [
            {
                "question": "What is the capital of France?",
                "options": ["A. London", "B. Paris", "C. Berlin", "D. Madrid"],
                "answer": "B"
            },
            {
class QuizGame:
    def __init__(self):
// var a ="umer"
// var b ="shakir"
// console.log("my name is "+ `${a}`+" " +`${b}`)
// console.log("my name is " +a+" "+b)




///unary opratorss
// let weight =84
// let hinmet =1.8288
// let result = weight / (hinmet*hinmet)
// console.log(result);


// const inquirer = require("inquirer");
// console.log(":::::::::::::::ADDITION CALCULATOR::::::::::::::::")
// const input1 = await inquirer.prompt({
//         name: "num1",
//         type:  "number",
//         message: "please enter number",
// });

// const input2 = await inquirer.prompt({
//     name: "num2",
//     type:  "number",
//     message: "please enter number",
// });

// let result = input1.num1 + input2.num2;
// console.log(result)



const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


rl.question("Enter your name: ", function (name) {
    console.log("Hello, " + name);
    rl.close(); // Close input stream
});






