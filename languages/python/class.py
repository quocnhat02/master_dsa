class Robot:
    def __init__(self, x, y):
        self.x = x
        self.y = y

    def __add__(self, __value: object):
        return f"Sum ({self.x + __value.x}:{self.y + __value.y})"
    
    def __sub__(self, __value: object):
        return f"Sub ({self.x - __value.x}:{self.y - __value.y})"

    def __eq__(self, __value: object):
        return self.x == __value.x and self.y == __value.y

    def __gt__(self, __value: object):
        return self.x > __value.x and self.y > __value.y

    def __ge__(self, __value: object):
        return self.x >= __value.x and self.y >= __value.y

    def __lt__(self, __value: object):
        return self.x < __value.x and self.y < __value.y

    def __le__(self, __value: object):
        return self.x <= __value.x and self.y <= __value.y

    def __str__(self):
        return f"I am a magic method ({self.x}:{self.y})"

    def walk(self):
        print(f"The robot is walking on {self.x}:{self.y}")

robot1= Robot(2,5)
robot2 = Robot(2,4)

# print(robot1+robot2)
print(robot1-robot2)

# print(robot1 == robot2)
# print(robot1 <= robot2)
# print(robot1 >= robot2)

# print(isinstance(robot_obj,Robot))