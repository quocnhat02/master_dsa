class Robot:
    def __init__(self, x, y):
        self.x = x
        self.y = y

    # @classmethod
    # def specific(cls):
    #     return cls(1.1,4.6)

    def __str__(self):
        return f"I am a magic method ({self.x}:{self.y})"

    def walk(self):
        print(f"The robot is walking on {self.x}:{self.y}")

robot = Robot(1,2)

print(str(robot))

# print(isinstance(robot_obj,Robot))