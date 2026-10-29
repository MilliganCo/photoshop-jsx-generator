from pathlib import Path
import os
import subprocess
import sys
import tempfile
import unittest


class GeneratorTests(unittest.TestCase):
    def test_output_is_utf8_and_matches_the_tracked_jsx(self):
        root = Path(__file__).parents[1]
        with tempfile.TemporaryDirectory() as directory:
            env = {**os.environ, 'PYTHONUTF8': '0', 'PYTHONIOENCODING': 'utf-8'}
            subprocess.run([sys.executable, root / 'Generate_jsx_ps.py'], cwd=directory,
                           env=env, check=True, capture_output=True)
            actual = (Path(directory) / 'her_style_color_correction.jsx').read_bytes()
            self.assertIn('Откройте документ'.encode('utf-8'), actual)
            self.assertEqual(actual, (root / 'her_style_color_correction.jsx').read_bytes().replace(b'\r\n', b'\n'))


if __name__ == '__main__':
    unittest.main()
