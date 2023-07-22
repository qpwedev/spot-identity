import unittest

from scoring import calculate_score


class TestCalculateScore(unittest.TestCase):
    def test_all_max(self):
        lens_score, gitcoin_score, total_score = calculate_score(
            5000, 200, 20, 100, 10, 200, 5, 100)

        self.assertAlmostEqual(lens_score + gitcoin_score, 1)
        self.assertAlmostEqual(total_score, 777)

    def test_all_zero(self):
        lens_score, gitcoin_score, total_score = calculate_score(
            0, 0, 0, 0, 0, 0, 0, 0)
        self.assertAlmostEqual(lens_score, 0)
        self.assertAlmostEqual(gitcoin_score, 0)
        self.assertAlmostEqual(total_score, 0)

    def test_one_max_rest_zero(self):
        lens_score, gitcoin_score, total_score = calculate_score(
            5000, 0, 0, 0, 0, 0, 0, 0)

        self.assertGreater(total_score, 0)
        self.assertLess(total_score, 777)

    def test_values_less_than_max(self):
        lens_score, gitcoin_score, total_score = calculate_score(
            100, 150, 15, 80, 7, 150, 4, 80)

        self.assertGreater(total_score, 0)
        self.assertLess(total_score, 777)

    def test_values_greater_than_max(self):
        lens_score, gitcoin_score, total_score = calculate_score(
            6000, 250, 25, 120, 12, 250, 6, 120)

        self.assertAlmostEqual(lens_score + gitcoin_score, 1)
        self.assertAlmostEqual(total_score, 777)


if __name__ == '__main__':
    unittest.main()
