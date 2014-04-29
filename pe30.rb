class FifthPower
  def initialize
  end

  def get_sum
    n = 10000000
    result_arr = []
    while n < 100000000
      result_arr << n if n == sum_fifth_power(n)
      n += 1
    end
  end

  def sum_fifth_power(num)
    num.to_s.each_char.collect{ |i| (i.to_i)**5 }.reduce(:+)
  end
end

puts FifthPower.new.get_sum