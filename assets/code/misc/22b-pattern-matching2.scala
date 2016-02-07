val someList: List[Any] = List(1, "Hello", 26.444f, List(4, 5, 6))

def foo(list: List[Any]): String = list match {
  case Nil => "Done!"
  case x :: xs => (x match {
    case n: Int       => "Int(" + n + ")"
    case s: String    => "String(" + s + ")"
    case f: Float     => "Float(" + f + ")"
    case l: List[Any] => "List(" + foo(l) + ")"
    case _            => "Other"
  }) + ", " + foo(xs)
}

println(foo(someList)) // Int(1), String(Hello), Float(26.444),
                       // List(Int(4), Int(5), Int(6), Done!), Done!
