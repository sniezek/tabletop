object Conditions extends Enumeration {
  type Condition = Value
  val Equals, Greater, Lower, GreaterAndEquals, LowerAndEquals = Value

  val map = Map[Condition, (Int, Int) => (Boolean)](
    Equals -> equals,
    Greater -> greater,
    Lower -> lower,
    GreaterAndEquals -> greaterAndEquals,
    LowerAndEquals -> lowerAndEquals
  )

  def equals(a: Int, b: Int): Boolean = {
    return a == b
  }

  def greater(a: Int, b: Int): Boolean = {
    return a > b
  }

  def lower(a: Int, b: Int): Boolean = {
    return a < b
  }

  def greaterAndEquals(a: Int, b: Int): Boolean = {
    return a >= b
  }

  def lowerAndEquals(a: Int, b: Int): Boolean = {
    return a <= b
  }

}