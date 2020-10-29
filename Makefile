.PHONY: help setup up down restoredb
.DEFAULT_GOAL: help

help:
	@echo "usage:"
	@echo "	up              start postgresql service and run server"
	@echo "	down            stop postgresql service"
	@echo "	restoredb       reset database"

up:
	brew services start postgresql
	rails s -p 3001

down:
	brew services stop postgresql

restoredb:
	brew services restart postgresql
	rails db:reset db:migrate