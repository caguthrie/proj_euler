class Collatz
  def initialize(longest)
    @longest = longest
    @memo = {}
  end

  def find_longest
    longest_starting_number = 0
    longest_num_hops = 0
    @longest.times do |i|
      current_try_hops = find_num_of_hops(i+1)
      if current_try_hops > longest_num_hops
        longest_starting_number = i+1
        longest_num_hops = current_try_hops
      end
    end
    longest_starting_number
  end

  def find_num_of_hops(n)
    count = 0
    while n != 1
      if @memo[n]
        count += @memo[n]
        break
      else
        if n % 2 == 0
          n = n/2
        else
          n = (3*n) + 1
        end
        count += 1
      end
    end
    @memo[n] ||= count
    count
  end 

end

puts Collatz.new(1000000).find_longest