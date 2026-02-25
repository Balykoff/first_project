import pytest
@pytest.fixture
def user():
return {"username": "test_user", "email": "test@example.com"}
