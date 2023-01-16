import Debug "mo:base/Debug";

actor DBank {
  //Assign a value in Motoko:
  stable var currentValue = 300;

  //Reassign a value:
  currentValue := 100;

  //Print text:
  Debug.print("hello");

  //Assign a constant:
  let id = 23459302;

  //Print a variable:
  //Debug.print(debug_show(currentValue));
  //Debug.print(debug_show(id));

  public func topUp(amount: Nat) {
    currentValue += amount;
    Debug.print(debug_show(currentValue));
  };

  //topUp(); 

  public func withdraw(amount: Nat) {
    let tempValue: Int = currentValue - amount;
    if (tempValue >= 0) {
      currentValue -= amount;
      Debug.print(debug_show(currentValue));
    } else {
      Debug.print("Not enough money on your account. Withdraw cancelled.")
    } 
  };

  public query func checkBalance(): async Nat {
    return currentValue;
  };

}
