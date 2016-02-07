def abs(x: Int): Int = x match {
	case n if n < 0 => -n
	case n if n >= 0 => n
}

abs(7) // 7
abs(-42) // 42
