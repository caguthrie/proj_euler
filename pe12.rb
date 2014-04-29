class TriangleNumber
  def initialize(num_divisors_max)
    @num_divisors_max = num_divisors_max
  end

  def find_most_divisible
    n = 1
    while true
      current_number = n*(n+1)/2
      break if number_of_divisors(current_number) > @num_divisors_max
      n += 1
    end
    current_number
  end

  def number_of_divisors(n)
    count = 1
    current_try = 1
    while current_try <= Math.sqrt(n)
      count += 1 if n % current_try == 0
      current_try += 1
    end
    puts "#{n} has #{count*2} divisors" if count > 100
    count*2
  end

end

puts TriangleNumber.new(500).find_most_divisible