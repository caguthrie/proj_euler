class Fibo
  def initialize(max)
    @max = max
  end

  def find_max_length
    a = 1
    b = 1
    count = 2
    while true
      count += 1
      c = a + b
      break if c.to_s.length >= 1000
      a = b
      b = c
    end
    count
  end

end

puts Fibo.new(1000).find_max_length