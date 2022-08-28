welcome = input("Hi! Welcome to review bot. Would you like to write a review? (yes)(no) ")

if welcome == 'yes' or welcome == 'Yes':
  dish = input("What dish would you like to review? ")
  stars = float(input("How many stars do you rate it? "))
  response = input("Would you like to leave a response? (yes)(no) ")
  if response == 'yes' or response == 'Yes':
    box = input("Please write your response bewlow: ")
    print("Thank you for your review. Have a nice day and don't forget to have a healthy meal!.")
  elif response == 'no' or response == 'No':
    print("Thank you for your review. Have a nice day and don't forget to have a healthy meal!.")
elif welcome == 'no' or welcome == 'No':
  print("Thanks for stopping bye. Have a healthy meal!")