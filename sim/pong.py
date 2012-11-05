from SortedCollection import SortedCollection

GAME_WIDTH = 800
GAME_HEIGHT = 400
BALL_VELOCITY = (1, 1)  # x**2 + y**2 < width of a paddle
PADDLE_VELOCITY = 2

class GameObject(object):
    max_x = GAME_WIDTH
    max_y = GAME_HEIGHT

    def __init__(self):
        self.collided_x = False
        self.collided_y = False

        self.position_x = 0
        self.position_y = 0

        self.velocity_x = 0
        self.velocity_y = 0

        if not hasattr(self, "width"):
            self.width = 0

        if not hasattr(self, "height"):
            self.height = 0

    def tick(self):
        self.collided_x = True
        self.collided_y = True
        new_x = self.position_x + self.velocity_x
        new_y = self.position_y + self.velocity_y

        self.position_x = self.check_collision_x(new_x)
        self.position_y = self.check_collision_y(new_y)

    def check_collision_x(self, new_x):
        if new_x + (self.width/2) >= self.max_x:
            new_x = self.max_x - (self.width/2)
            self.velocity_x = -self.velocity_x
        elif new_x - (self.width/2) <= 0:
            new_x = 0 + (self.width/2)
            self.velocity_x = -self.velocity_x
        else:
            self.collided_x = False
        return new_x

    def check_collision_y(self, new_y):
        if new_y + (self.height/2) >= self.max_y:
            new_y = self.max_y - (self.height/2)
            self.velocity_y = -self.velocity_y
        elif new_y - (self.height/2) <= 0:
            new_y = 0 + (self.height/2)
            self.velocity_y = -self.velocity_y
        else:
            self.collided_y = False

        return new_y

    def initialize(self):
        pass

    def clone(self):
        copy = self.__class__()
        copy.max_x = self.max_x
        copy.max_y = self.max_y
        copy.position_x = self.position_x
        copy.position_y = self.position_y
        copy.velocity_x = self.velocity_x
        copy.velocity_y = self.velocity_y
        copy.width = self.width
        copy.height = self.height
        copy.collided_x = self.collided_x
        copy.collided_y = self.collided_y
        return copy

    def corners(self):
        x1 = self.position_x - (self.width/2)
        x2 = self.position_x + (self.width/2)
        y1 = self.position_y - (self.height/2)
        y2 = self.position_y + (self.height/2)
        return (x1, y1, x2, y2)

    def intersects_with(self, obj):
        (a_x1, a_y1, a_x2, a_y2) = self.corners()
        (b_x1, b_y1, b_x2, b_y2) = obj.corners()

        return a_x1 < b_x2 and a_x2 > b_x1 and \
                a_y1 < b_y2 and a_y2 > b_y1

class Ball(GameObject):
    width = 10
    height = 10

    def initialize(self):
        self.position_x = self.max_x/2
        self.position_y = self.max_y/2
        self.velocity_x, self.velocity_y = BALL_VELOCITY

class Paddle(GameObject):
    width = 10
    height = 50
    def check_collision_y(self, new_y):
        if new_y + (self.height/2) >= self.max_y:
            new_y = self.max_y - (self.height/2)
            self.velocity_y = 0
        elif new_y - (self.height/2) <= 0:
            new_y = self.height/2
            self.velocity_y = 0
        return new_y

    def initialize(self, is_player2=False):
        self.velocity_x = 0
        self.velocity_y = 0

        if is_player2:
            self.position_x = self.max_x - (self.width/2)
        else:
            self.position_x = self.width/2

        self.position_y = self.max_y/2

class GameState(object):
    def __init__(self, ball=Ball(), paddle1=Paddle(), paddle2=Paddle()):
        self.objects = (paddle1, paddle2, ball)
        self.match_over = False

    def ball(self):
        return self.objects[2]

    def paddle1(self):
        return self.objects[0]

    def paddle2(self):
        return self.objects[1]

    def initialize(self):
        self.match_over = False
        self.ball().initialize()
        self.paddle1().initialize(False)
        self.paddle2().initialize(True)

    def winner(self):
        if not self.match_over:
            return None

        if self.ball().position_x < self.ball().max_x-self.ball().position_x:
            return 1
        else:
            return 0

    def tick(self):
        if self.match_over:
            return

        for obj in self.objects:
            obj.tick()

        # Check for ball-wall collisions
        if self.ball().collided_x:
            self.match_over = True

        # Check for ball-paddle collisions
        if self.paddle1().intersects_with(self.ball()):
            self.ball().velocity_x = abs(self.ball().velocity_x)
        elif self.paddle2().intersects_with(self.ball()):
            self.ball().velocity_x = -abs(self.ball().velocity_x)


    def clone(self):
        new = self.__class__()
        new.objects = tuple(x.clone() for x in self.objects)
        return new

    def clone_tick(self):
        new = self.clone()
        new.tick()
        return new

    def toJSON(self):
        jsond = []
        for obj in self.objects:
            jsond.append({'position': (obj.position_x, obj.position_y),
                            'velocity': (obj.velocity_x, obj.velocity_y)})
        return {'ball': jsond[2], 'paddle1': jsond[0], 'paddle2': jsond[1]}

class Pong(object):
    PLAYER1 = 0
    PLAYER2 = 1

    NULL = 'N'
    BALL = 'B'
    UP_PRESS = 'PU'
    UP_RELEASE = 'RU'
    DOWN_PRESS = 'PD'
    DOWN_RELEASE = 'RD'

    def __init__(self):
        self.last_action_time = [0, 0]
        self.actions = SortedCollection([(-1, 0, self.NULL)])
        self.states = [GameState()]
        self.current_state = self.states[0]
        self.current_time = 0

    def action(self, player, action_time, action, state=None):
        if self.last_action_time[player] > action_time:
            return  # Discard out of order actions

        # Update the action time for the player
        self.last_action_time[player] = action_time

        # Insert the action into the actions list
        action_tuple = (action_time, player, action)
        index = self.actions.insert_right(action_tuple)

        # Delete the invalidated states
        del self.states[index+1:]

        if state is not None:
           new_state = GameState()

           ball = new_state.ball()
           ball.position_x, ball.position_y = state['ball']['position']
           ball.velocity_x, ball.velocity_y = state['ball']['velocity']

           paddle1 = new_state.paddle1()
           paddle1.position_x, paddle1.position_y = state['paddle1']['position']
           paddle1.velocity_x, paddle1.velocity_y = state['paddle1']['velocity']

           paddle2 = new_state.paddle2()
           paddle2.position_x, paddle2.position_y = state['paddle2']['position']
           paddle2.velocity_x, paddle2.velocity_y = state['paddle2']['velocity']
           self.states.append(new_state)
        # Save the current time so we can fast forward
        now = self.current_time

        # Resimulate with the new action inserted
        self.simulate()

        # Advance to where we were before the action was inserted
        self.tick_until(now)

    def simulate(self):
        current_idx = len(self.states)-1                    # Start at the last known state
        self.current_state = self.states[-1]                # Rewind the current_state to the last good state
        self.current_time = self.actions[current_idx][0]    # Rewind the time to the action associated with that state

        current_idx += 1                                    # Move to the next action (this one hasn't been simulated yet)
        while current_idx < len(self.actions):
            current_action = self.actions[current_idx]
            current_idx += 1

            self.tick_until(current_action[0])              # Advance the simulation until this action occurs
            self._run_action(current_action)                # Execute the action
            self.states.append(self.current_state.clone())  # Save the state after the action executed

    def _run_action(self, action_tuple):
        action_time, player, action = action_tuple

        paddle = self.current_state.objects[player]

        if action == self.NULL:
            pass # Nothing to do here
        elif action == self.BALL:
            self.current_state.initialize()
        elif action == self.UP_PRESS:
            paddle.velocity_y = min(paddle.velocity_y+PADDLE_VELOCITY, PADDLE_VELOCITY)
        elif action == self.UP_RELEASE:
            if paddle.velocity_y > 0:
                paddle.velocity_y = 0
        elif action == self.DOWN_PRESS:
            paddle.velocity_y = max(paddle.velocity_y-PADDLE_VELOCITY, -PADDLE_VELOCITY)
        elif action == self.DOWN_RELEASE:
            if paddle.velocity_y < 0:
                paddle.velocity_y = 0

    def tick_until(self, time):
        while not self.current_state.match_over and self.current_time < time:
            self.tick()

    def tick(self):
        self.current_state.tick()
        self.current_time += 1
