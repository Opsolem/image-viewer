SHELL = /bin/sh
NPM = npm

SUBDIRS       := ./frontend ./backend
NODE_MODULES  := $(foreach subdir,$(SUBDIRS),$(subdir)/node_modules)

watch: install
	tmux new-session -d "bash -c 'cd frontend && $(NPM) run watch; bash'"
	tmux split-window -h "bash -c 'cd backend && $(NPM) run watch; bash'"
	tmux attach-session

install: $(NODE_MODULES)

$(NODE_MODULES):
	cd $(patsubst %/node_modules,%,$@) && $(NPM) ci
