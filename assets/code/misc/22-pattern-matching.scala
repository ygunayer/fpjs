val numbers = 1 :: 2 :: 3 :: 4 :: 5 :: Nil

def sum(list: List[Int]): Int = list match {
	case Nil => 0
	case head :: tail => head + sum(tail)
}
