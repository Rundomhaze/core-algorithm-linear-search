def linear_search(object, array)
  i = 0
  until i == array.length
    if array[i] == object
        puts array[i]
      break
    end
    i += 1
  end
  return i
end

 array = [:a, :b, :c, :b]


def global_linear_search(object, array)
  select_array = []
  i = 0
  until i == array.length
    if array[i] == object
        select_array << i
    end
    i += 1
  end
  return select_array
end



p global_linear_search(:b, array)





# def lo(object, array)
#   select_array = []
#   i = 0
#   until i > array.length
#     if yield [i] == object
#       select_array << array[i]
#     end
#   i +=1
# end
# end

# p lo(:b, array)
