class Robot:
    def __init__(self, x, y):
        self.x = x
        self.y = y

    def walk(self):
        print(f"The robot is walking on {self.x}:{self.y}")

robot = Robot(2.5,6.5)

robot.walk()

# print(isinstance(robot_obj,Robot))