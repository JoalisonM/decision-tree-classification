from typing import NamedTuple, Optional


class Candidate(NamedTuple):
    level: Optional[str] = None
    lang: Optional[str] = None
    tweets: Optional[bool] = None
    phd: Optional[bool] = None
    did_well: Optional[bool] = None  # Permita dados não rotulados


#               level    lang   tweets  phd   did_well
inputs = [
    Candidate('Senior', 'Java', False, False, False),
    Candidate('Senior', 'Java', False, True, False),
    Candidate('Mid', 'Python', False, False, True),
    Candidate('Junior', 'Python', False, False, True),
    Candidate('Junior', 'R', True, False, True),
    Candidate('Junior', 'R', True, True, False),
    Candidate('Mid', 'R', True, True, True),
    Candidate('Senior', 'Python', False, False, False),
    Candidate('Senior', 'R', True, False, True),
    Candidate('Junior', 'Python', True, False, True),
    Candidate('Senior', 'Python', True, True, True),
    Candidate('Mid', 'Python', False, True, True),
    Candidate('Mid', 'Java', True, False, True),
    Candidate('Junior', 'Python', False, True, False),
]
