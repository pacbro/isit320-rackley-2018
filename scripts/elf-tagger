#! /usr/bin/env bash.

#check for correct amount of parameters
if [[ -z $2 ]]; then
    echo -e "You must pass in a commit message and the project name"
    exit
fi

if [[ ! -z $3 ]]; then
    echo -e "Too many parameters"
    exit
fi

# IFS is the default separator of white space
# BASH_REMATCH gets the first Regular Express match
function git_branch {
  local git_status="$(git status 2> /dev/null)"  
  local on_branch="On branch ([^${IFS}]*)"  
  local on_commit="HEAD detached at ([^${IFS}]*)"

  if [[ $git_status =~ $on_branch ]]; then
    local branch=${BASH_REMATCH[1]}
    echo "$branch"
  elif [[ $git_status =~ $on_commit ]]; then
    local commit=${BASH_REMATCH[1]}
    echo "$commit"
  fi
}

#original code edited for my tags, tagged using A.B instead of vX.Y.Z
#OLD_TAG_VERSION=`git tag --sort=taggerdate | tail -1 |  sed -En "s/v(.*)/\1/p"`

OLD_TAG_VERSION=`git tag --sort=taggerdate | tail -1 |  sed -En "(.*)/\1/p"`
TAG_VERSION=v`semver-inc -p $OLD_TAG_VERSION`


BRANCH=`git_branch`

TAG_STRING="$1 for $2 on branch `git_branch` with tag ${TAG_VERSION}."
echo $TAG_STRING

function push_tag() {
  git status

  git add .
  git commit -m "$1"
  git push --set-upstream origin ${BRANCH}

  git tag -a "${TAG_VERSION}" -m "${TAG_STRING}"
  git push origin "${TAG VERSION}"
}

push_tag
