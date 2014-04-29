class Quad
  def initialize(max_abs)
    @max_abs = max_abs
  end

  def most_primes
    primes = {}
    current_max = 0
    a = 0-@max_abs
    while a <= @max_abs
      b = 0-@max_abs
      while b <= @max_abs
        current_find = how_many_primes(a,b)
        if current_find > current_max
          current_max_a = a
          current_max_b = b
          current_max = current_find
          puts "#{current_max_a} #{current_max_b}"
        end
        b += 1
      end
      a += 1
    end
    current_max_a*current_max_b
  end

  def how_many_primes(a,b)
    primes = 0
    n = 0
    while true
      if is_prime?((n**2)+(a*n)+b)
        primes += 1
        n += 1
      else
        break
      end
    end
    primes
  end

  def is_prime?(num)
    return false if num < 2
    i = 2
    while i <= num/2
      return false if num % i == 0
      i += 1
    end
    true
  end

end
t = Time.now
puts Quad.new(1000).most_primes
puts "This took #{Time.now - t} seconds"

